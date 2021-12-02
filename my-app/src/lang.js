var arrLang = {
    en: {
        first:"There are multiple reasons to be a chef for me and the very first one is I just love cooking. I know it is quite common to cook but I just love it and it keeps me happy. One should do what makes them happy and I really like experimenting with new recipes too.",
        second:"Apart from my love for cooking, another most important thing is I am a glutton. Every day, I just think about food and what the next that I can try. Sometimes my parents just don’t allow me to have street food at that time my cooking abilities help me and I really want to learn more, so that I can cook some five-star hotels recipes at home.",
        third:"The third reason behind loving this profession is I love serving others. I like to invite people and cooking something they like. It gives me immense pleasure and my love for this profession increases more and more."
    },
    ru: {
        first:"Для меня есть несколько причин стать шеф-поваром, и самая первая из них заключается в том, что я просто люблю готовить. Я знаю, что готовить довольно часто, но я просто люблю это, и это делает меня счастливой. Нужно делать то, что делает их счастливыми, и мне тоже очень нравится экспериментировать с новыми рецептами",
        second:"Помимо моей любви к кулинарии, еще одна самая важная вещь - я обжора. Каждый день я просто думаю о еде и о том, что я могу попробовать в следующий раз. Иногда мои родители просто не разрешают мне есть уличную еду, в то время как мои кулинарные способности помогают мне, и я действительно хочу узнать больше, чтобы я мог готовить некоторые рецепты пятизвездочных отелей дома",
        third:"Третья причина любви к этой профессии заключается в том, что я люблю обслуживать других. Мне нравится приглашать людей и готовить то, что им нравится. Это доставляет мне огромное удовольствие, и моя любовь к этой профессии растет все больше и больше."
    }
};

function transs() {
    (".translate").click(function() {
        var lang = (this).attr('id');

        ('.lang').each(function(index, item) {
            (this).text(arrLang[lang][(this).attr('key')]);
        });
    });
};
//idk why it is not working
export default transs;
