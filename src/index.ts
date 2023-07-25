import axios from 'axios';
import cheerio from 'cheerio';

export class CapitalCityScraper {
    async scrapeCity(url: string) {
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const cityName = $('.mergedtoprow th:contains(Country) + td').text().trim();
        console.log(cityName);
    }
}

async function main() {
    const scraper = new CapitalCityScraper();
    await scraper.scrapeCity("https://en.wikipedia.org/wiki/Izhevsk");
}

main();