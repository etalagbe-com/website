const languageSelect = document.getElementById("language-select");

function setLanguage(language) {
  const lang = ["bn", "en", "zh"].includes(language) ? language : "bn";
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
  languageSelect.value = lang;
  document.querySelectorAll("[data-bn][data-en][data-zh]").forEach((element) => {
    element.textContent = element.dataset[lang];
  });
  document.querySelectorAll("[data-alt-bn][data-alt-en][data-alt-zh]").forEach((element) => {
    element.alt = element.getAttribute(`data-alt-${lang}`);
  });
  document.title = lang === "bn"
    ? "etalagbe.com | ইউএসবি সোলার প্যানেল"
    : lang === "zh"
      ? "etalagbe.com | USB 太阳能板"
      : "etalagbe.com | USB Solar Panel";
  document.querySelector('meta[name="description"]').content = lang === "bn"
    ? "etalagbe.com ইউএসবি সাপোর্ট যুক্ত পোর্টেবল সোলার প্যানেল—৮ ওয়াটের সৌরবিদ্যুৎ ও ইউএসবি চার্জিং সমাধান।"
    : lang === "zh"
      ? "etalagbe.com 支持 USB 的便携式太阳能板——8 瓦太阳能供电与 USB 充电解决方案。"
      : "etalagbe.com USB Supported Portable Solar Panel - 8W solar power solution with USB charging support.";
}

languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
setLanguage("bn");
