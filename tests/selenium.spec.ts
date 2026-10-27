import { Alumni } from "alumnium";
import { Builder } from "selenium-webdriver";

process.env.OPENAI_API_KEY = "...";

const driver = await new Builder().forBrowser("chrome").build();
const al = new Alumni(driver);

await driver.get("https://search.brave.com");
await al.do("type 'selenium' into the search field, then press 'Enter'");
await al.check("page title contains selenium");
await al.check("search results contain selenium.dev");
console.assert((await al.get("atomic number")) === 34);

await al.quit();