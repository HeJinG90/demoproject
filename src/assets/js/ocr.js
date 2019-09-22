import crypto from 'crypto'
import axios from 'axios'

let _key = '24964536'
let _secret = 'c2d675d232208a10b2101824515724e7'

const imgtobase64 = function(url) {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas')
        let img = document.createElement('img')
        if (!canvas.getContext) {
            reject('CanvasIsNotSupported')
        }
        img.onload = function() {
            let ctx = canvas.getContext('2d')
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)
            resolve(canvas.toDataURL('image/png'))
        }
        img.ononerror = function() {
            reject('FailedToLoadImage')
        }
        img.setAttribute('crossOrigin', 'anonymous')
        img.src = url
    })
}

const md5 = function(buffer) {
    return crypto
        .createHash('md5')
        .update(buffer)
        .digest('base64')
}

const sha256 = function(source, secret) {
    return crypto
        .createHmac('sha256', secret)
        .update(source)
        .digest()
        .toString('base64')
}

const getAxiosOptions = ({ domain, path, dataURI, side }) => {
    let options = {
        url: domain + path,
        method: 'POST',
        data: JSON.stringify({
            image: dataURI,
            configure: {
                side
            }
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Ca-Key': _key,
            'X-Ca-Signature-Headers': 'X-Ca-Key'
        }
    }

    let bodymd5 = md5(new Buffer(options.data))
    let span = '\n'
    let stringToSign =
        options.method +
        span +
        options.headers.Accept +
        span +
        bodymd5 +
        span +
        options.headers['Content-Type'] +
        span +
        span +
        'X-Ca-Key:' +
        _key +
        span +
        path

    let signature = sha256(stringToSign, _secret)

    options.headers['Content-MD5'] = bodymd5
    options.headers['X-Ca-Signature'] = signature

    return options
}

const _getIdCard = function(dataURI, side) {
    let domain = 'https://dm-51.data.aliyun.com'
    let path = '/rest/160601/ocr/ocr_idcard.json'

    let options = getAxiosOptions({ domain, path, dataURI, side })

    return axios(options)
}

const _getDrivingLicense = function(dataURI, side) {
    let domain = 'https://dm-52.data.aliyun.com'
    let path = '/rest/160601/ocr/ocr_driver_license.json'

    let options = getAxiosOptions({ domain, path, dataURI, side })

    return axios(options)
}

const _getVehicleLicense = function(dataURI, side) {
    let domain = 'https://dm-53.data.aliyun.com'
    let path = '/rest/160601/ocr/ocr_vehicle.json'

    let options = getAxiosOptions({ domain, path, dataURI, side })

    return axios(options)
}

const getIdCard = function(src, side) {
    return new Promise((resolve, reject) => {
        if (!src) reject('src cannot be empty')
        if (!side) reject('please input valid side: face/back')

        imgtobase64(src).then(uri =>
            _getIdCard(uri.split('base64,')[1], side)
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => reject(err))
        )
    })
}

const getDrivingLicense = function(src, side) {
    return new Promise((resolve, reject) => {
        if (!src) reject('src cannot be empty')
        if (!side) reject('please input valid side: face/back')

        imgtobase64(src).then(uri =>
            _getDrivingLicense(uri.split('base64,')[1], side)
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => reject(err))
        )
    })
}

const getVehicleLicense = function(src, side) {
    return new Promise((resolve, reject) => {
        if (!src) reject('src cannot be empty')
        if (!side) reject('please input valid side: face/back')

        imgtobase64(src).then(uri =>
            _getVehicleLicense(uri.split('base64,')[1], side)
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => reject(err))
        )
    })
}

export { getIdCard, getDrivingLicense, getVehicleLicense }