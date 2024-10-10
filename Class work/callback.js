// Function to download a file
function downloadFile(url, downloadCallback) {
    console.log("Started Downloading");
    setTimeout(() => {
        const fileName = url.split("/").pop();
        downloadCallback(fileName);
    }, 2000); // 2 seconds timeout to simulate download
}

// Function to compress a file
function compressFile(path, compressCallback) {
    console.log("File compressing began");
    setTimeout(() => {
        const compressedFile = path.split(".")[0] + ".zip";
        compressCallback(compressedFile);
    }, 25000); // 25 seconds timeout to simulate compression
}

// Function to upload a file
function uploadFile(compressedFile, uploadCallback) {
    console.log("Uploading file...");
    setTimeout(() => {
        console.log("Uploaded successfully");
        uploadCallback(compressedFile);
    }, 5000); // 5 seconds timeout to simulate upload
}

// Main function to execute the download, compress, and upload sequence
function main() {
    const url = "https://www.anyz.com/abc.mp3";

    // Step 1: Download the file
    downloadFile(url, (downloadedFile) => {
        console.log(`Downloaded: ${downloadedFile}`);
        
        // Step 2: Compress the downloaded file
        compressFile(downloadedFile, (compressedFile) => {
            console.log(`Compressed to: ${compressedFile}`);
            
            // Step 3: Upload the compressed file
            uploadFile(compressedFile, (uploadedFile) => {
                console.log(`Uploaded: ${uploadedFile}`);
            });
        });
    });
}

// Run the main function
main();
