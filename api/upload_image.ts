import ax from 'axios'
const axios = ax.defaults
import fs from 'fs'
import tokens from "../tokens.json"

function upload_to_cdn(path: string) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) console.error(err)
    
            const resume_base64 = data.toString('base64');
    
            var options = {
                method: 'POST',
                url: 'https://upload.imagekit.io/api/v1/files/upload',
                headers: {
                'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
                Authorization: `Basic ${process.env.IMAGEKIT_PRIVATE_KEY}`
                },
                data: `-----011000010111000001101001\r\nContent-Disposition: form-data; name="fileName"\r\n\r\nfile.pdf\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="file"\r\n\r\n${resume_base64}\r\n-----011000010111000001101001--\r\n`
            };
            
            axios.request(options).then(function (response: any) {
                resolve({
                    err: false,
                    ...response.data
                })
            }).catch(function (error: any) {
                console.error(error);
                reject({
                    err: true,
                    msg: "Error Uploading to Content Delivery Network"
                })
            });
        })
    })
}

export default upload_to_cdn;