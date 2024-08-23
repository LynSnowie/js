//========= Copyright ©️ 2024, Lyn Snow, All rights reserved. ============//
//
// Purpose: Specific About Snowi Java script code.
//
//========================================================================//

function change(id, attribute, value) {
    console.log(`We are changing ${id}'s value from ${document.getElementById(id)[attribute]}to ${value}`);
    document.getElementById(id)[attribute] = value;
}

function redirect(site) {
    localStorage.setItem("Snowi Redirecting", true)
    localStorage.setItem("Snowi Redirect Page", site)
    localStorage.setItem("Snowi Prev Page", "")
    window.location = "../redirect/index.html"
}

window.onload = function()
{
    if (document.title == "About Snowi")
    {
        console.log("Loaded Snowi");

        change("tiktok redirect", "href", "https://tiktok.com/@your_fuzzy_snowi"); //your_fuzzy_james
        change("youtube redirect", "href", "https://www.youtube.com/@fuzzysnowie");
        change("patreon redirect", "href", "https://www.patreon.com/lynsnowie");
        change("nonbin redirect", "href", "https://en.wikipedia.org/wiki/Non-binary_gender");
        change("aroace redirect", "href","https://en.wikipedia.org/wiki/Aromanticism");
        change("adhd redirect", "href","https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder");
        change("billards redirect", "href","https://en.wikipedia.org/wiki/English_billiards");
        change("sims 4 redirect", "href","https://en.wikipedia.org/wiki/The_Sims_4");
        change("tf2 redirect", "href","https://en.wikipedia.org/wiki/Team_Fortress_2");
        change("he redirect", "href","https://store.steampowered.com/app/485900/Hardware_Engineers/");
        change("pcbs redirect", "href","https://store.steampowered.com/app/621060/PC_Building_Simulator/");
        // change("antifur redirect", "onclick",redirect("https://en.wikifur.com/wiki/Anti-furries")); //https://en.wikifur.com/wiki/Anti-furries
        // change("zoo redirect", "onclick", redirect("https://en.wikipedia.org/wiki/Zoophilia")); // "https://en.wikipedia.org/wiki/Zoophilia"
        
        change("tf2 google drive", "href","https://drive.google.com/drive/folders/1E2Ok-QroC-TVK35oLRF44J4QhtnxBSgO?usp=drive_link");
        change("music google drive", "href","https://drive.google.com/drive/folders/11bAlOS_Vj__dashdD2hVp2pKe3r83ZcK?usp=drive_link");
        change("public silly", "href","https://drive.google.com/drive/folders/10h01s6WtAstQHH2dbXyKOK0c4LICbMzG?usp=drive_link");


        // change("aroace redirect", "href","https://en.wikipedia.org/wiki/Aromanticism");
        // change("aroace redirect", "href","https://en.wikipedia.org/wiki/Aromanticism");
        // change("aroace redirect", "href","https://en.wikipedia.org/wiki/Aromanticism");
    }
}
