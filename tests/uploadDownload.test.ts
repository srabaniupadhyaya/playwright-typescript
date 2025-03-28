import { test } from "@playwright/test";

test("Download files", async ({ page }) => {

    await page.goto("https://letcode.in/file");

    const download= await Promise.all([
        page.waitForEvent("download"),
        page.click("#xls")

    ])
     /* By default Downloaded files are deleted when the browser context that produced them is closed
     Here is how we handle that*/

     const fileName=download[0].suggestedFilename();
      await download[0].saveAs(fileName);
     
})


test.only("Upload files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    // await page.setInputFiles("input[type='file']",
    //     ["uploadItems/apple.png", "uploadItems/mango.png"]);

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(
        ["uploadItems/app.png",
            "uploadItems/app.png"]
    )




    await page.waitForTimeout(3000);
})

