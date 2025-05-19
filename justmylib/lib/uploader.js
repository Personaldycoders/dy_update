let axios = require('axios');
let formData = require('form-data');
let { fromBuffer } = require('file-type');
let fetch = require('node-fetch');
let fs = require('fs');
let cheerio = require('cheerio');

/**
 * Upload file to Catbox.moe
 * @param {Buffer} buffer - The buffer of the file to upload
 * @returns {Promise<string>} - Uploaded file URL
 */
async function TelegraPh(buffer) {
    try {
        let { ext } = await fromBuffer(buffer);
        let bodyForm = new formData();
        bodyForm.append("fileToUpload", buffer, "file." + ext);
        bodyForm.append("reqtype", "fileupload");

        let res = await fetch("https://catbox.moe/user/api.php", {
            method: "POST",
            body: bodyForm,
        });

        let data = await res.text();
        return data;
    } catch (error) {
        throw new Error(`TelegraPh upload failed: ${error.message}`);
    }
}

/**
 * Upload file to Uguu.se
 * @param {string} input - File path
 * @returns {Promise<string>} - Uploaded file URL
 */
async function UploadFileUgu(input) {
    return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(input)) return reject(new Error("File not found"));
        try {
            const form = new formData();
            form.append("files[]", fs.createReadStream(input));

            const response = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders(),
                },
                data: form,
            });

            if (response.data && response.data.files && response.data.files[0]) {
                resolve(response.data.files[0]);
            } else {
                reject(new Error("Uguu upload failed"));
            }
        } catch (error) {
            reject(new Error(`Uguu upload failed: ${error.message}`));
        }
    });
}

/**
 * Convert WebP to MP4 using Ezgif
 * @param {string} path - Path to the WebP file
 * @returns {Promise<object>} - Conversion result
 */
function webp2mp4File(path) {
    return new Promise((resolve, reject) => {
        const form = new formData();
        form.append('new-image-url', '');
        form.append('new-image', fs.createReadStream(path));

        axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: form,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
            },
        })
            .then(({ data }) => {
                const $ = cheerio.load(data);
                const file = $('input[name="file"]').attr('value');
                const formDataThen = new formData();
                formDataThen.append('file', file);
                formDataThen.append('convert', "Convert WebP to MP4!");

                axios({
                    method: 'post',
                    url: 'https://ezgif.com/webp-to-mp4/' + file,
                    data: formDataThen,
                    headers: {
                        'Content-Type': `multipart/form-data; boundary=${formDataThen._boundary}`,
                    },
                })
                    .then(({ data }) => {
                        const $ = cheerio.load(data);
                        const result =
                            'https:' +
                            $('div#output > p.outfile > video > source').attr(
                                'src'
                            );
                        resolve({
                            status: true,
                            message: "Xeorz",
                            result: result,
                        });
                    })
                    .catch(reject);
            })
            .catch(reject);
    });
}

/**
 * Upload file to FloNime
 * @param {Buffer} medianya - The buffer of the media file
 * @param {object} options - Additional options (e.g., { ext })
 * @returns {Promise<object>} - JSON response from FloNime API
 */
async function floNime(medianya, options = {}) {
    try {
        const { ext } = (await fromBuffer(medianya)) || options.ext;
        let form = new formData();
        form.append('file', medianya, 'tmp.' + ext);

        let response = await fetch('https://flonime.my.id/upload', {
            method: 'POST',
            body: form,
        });

        let jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        throw new Error(`FloNime upload failed: ${error.message}`);
    }
}

module.exports = { TelegraPh, UploadFileUgu, webp2mp4File, floNime };
