if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Posts.find().count() === 0) {
            var posts = [
                {
                    title: "AGHacks",
                    content: '<p><span style="text-decoration: underline; font-style: italic;"><span style="font-size: 24px;">O HACKATHONIE</span></span></p><p><span style="text-decoration: underline; font-style: italic;"><span style="font-size: 24px;"><br></span></span></p><p>AGHacks jest największym i najpopularniejszym,polskim studenckim hackathonem organizowanym przez studentów jednej z najlepszych technicznych uczelni w Polsce - AGH. Łączy największe talenty ze świata IT , które w czasie 48 godzin urzeczywistnią pomysły, o których od zawsze śnili.</p><p><br></p><p>Czy kiedykolwiek marzyłeś o takiej przygodzie? Jedynej takiej okazji w życiu, w czasie której poznasz wspaniałych ludzi z Polski, Meksyku czy Stanów Zjednoczonych? Podejmij wyzwanie i dołącz do 500 programistów i designerów AGHacks!</p><p><br></p><p>Nowicjusze oraz profesjonaliści jednoczą się we wspólnym wysiłku, by przez tych parę dni i nocy móc pracować tylko i wyłącznie nad własnymi, szalonymi pomysłami.Rozwiną swoje zainteresowania, na które na co dzień brakuje czasu lub zapału. Podczas wydarzenia, uczestnicy będą wspierani przez mentorów z wiodących firm technologicznych oraz doceniani za swój wysiłek przeróżnymi nagrodami. Spośród wszystkich drużyn, wyłonimy zespół z najlepszym projektem, który zostanie okrzyknięty Mistrzami AGHacks!</p><p><br></p><p>Nie wierzysz? Przyjdź i przekonaj się na własne oczy!</p><p><a href="http://www.aghacks.com/" target="_blank">Źródło</a><br></p>',
                    author: "admin",
                    image: "http://s19.postimg.org/lk6a8h4i9/agh.png",
                    date: new Date(),
                    description: "Hackathon organizowany na AGH",
                    tags: ["AGH", "AGHACKS", "AKADEMIA", "GÓRNICZO-HUTNICZA", "IM.", "STANISŁAWA", "STASZICA", "W", "KRAKOWIE", "KRAKÓW", "HACKATHON", "HAKATON", "AGHACKS", "AGHACKS"],
                },
                {
                    title: "HACKWAW",
                    content: '<div><span style="text-decoration: underline;">O co chodzi?</span></div><div><br></div><div>HACKWAW to warszawski hackathon, czyli maraton dla programistów odbywający się regularnie w stolicy. Co roku, prawie stu programistów i designerów spotyka się w jednym miejscu, aby przez cały dzień oddawać się czystej radości tworzenia. Celem wydarzenia jest szybkie prototypowanie i budowanie nowych projektów w trakcie hackathonu i zaprezentowanie ich na koniec dnia.</div><div><br></div><div><span style="text-decoration: underline;">Dlaczego warto?</span></div><div><br></div><div>Sobota pełna wymyślania, hackowania, tworzenia i brainstormowania</div><div>Szansa na poznanie fantastycznych ludzi!</div><div>Pomoc od najlepszych mentorów</div><div>Pyszne jedzenie i spory zapas energy drinków :)</div><div>Szansa na wygranie super nagród</div><div>Bycie częścią rosnącej społeczności ludzi takich jak Ty</div><div>FUN!</div><div><span style="text-decoration: underline;"><br></span></div><div><span style="text-decoration: underline;">Agenda:</span></div><div><br></div><div>8:00 start rejestracji, śniadanie i kawa</div><div>9:10 otwarcie hackathonu!</div><div>9:40 opowiedz o swoim pomyśle</div><div>10:00 tworzymy zespoły i zaczynamy pracę!</div><div>14:00 lunch :)</div><div>17:00 test projektora</div><div>17:30 finalne prezentacje!</div><div>19:00 ogłoszenie wyników i zakończenie</div><div><span style="text-decoration: underline;"><br></span></div><div><span style="text-decoration: underline;">Gdzie?</span></div><div><br></div><div>Znany Lekarz, ul. Kolejowa 5/7</div><div><a href="http://hackwaw.com/" target="_blank">Źródło</a><br></div>',
                    author: "admin",
                    image: "http://s19.postimg.org/89n0sp3bn/hackwaw.png",
                    date: new Date(),
                    description: "Legendarny hackathon wraca do miasta!",
                    tags: ["ZNANY", "LEKARZ", "KOLEJOWA", "BRAINSTORM", "MARATON", "WARSZAWA", "STOLICA", "WWA", "HACKWAW"],
                },
                {
                    title: "Night of The Living Devs",
                    content: '<div><span style="text-decoration: underline;">What is NotLD?</span></div><div>Night of the Living Devs is an international hackathon for students, organized across twelve European countries by Microsoft. In 24 hours, six-members’ teams will face three different apps categories, with only six hours to code each of them. Are you brave enough to survive the night? Will you turn into the Living Dev?</div><div><br></div><div><span style="text-decoration: underline;">Agenda</span></div><div>It will be a taught night. Don’t worry about the food. We will provide it :) All you have to worry about is… STAYING ALIVE!!</div><div>Each app will be evaluated by local judges. Read more about the [rules here]</div><div>18:00 – 18:30 – Hackaton Opening&nbsp;</div><div>18:30 – 19:00 – Short presentation&nbsp;</div><div>19:00 – 01:00 – APP SLOT #1&nbsp;</div><div>01:00 – 07:00 – APP SLOT #2&nbsp;</div><div>07:00 – 13:00 – APP SLOT #3&nbsp;</div><div>13:00 - 17:00 – Time for apps tweaking&nbsp;</div><div>17:00 – 18:00 – Hackathon Closing</div><div><br></div><div><span style="text-decoration: underline;">Location</span></div><div>Do you want to find your nearest gathering place? The zombie’ nests are here:</div><div>Micorosoft, Al. Jerozolimskie 195a,&nbsp;</div><div>02 – 222 Warszawa</div>',
                    author: "admin",
                    image: "http://s19.postimg.org/8oyalpp8z/notld.png",
                    date: new Date(),
                    description: "International hackathon for students, organized across twelve European countries by Microsoft.",
                    tags: ["NOTLD", "MICOSOFT", "HACKING", "HACKATHON", "PROGRAMMING", "CHALLANGE", "WARSAW", "WARSZAWA", "NIGHT", "OF", "THE", "LIVING", "DEVS", "NIGHT", "OF", "THE", "LIVING", "DEVS"],
                },
                {
                    title: "WAWCODE",
                    content: '<p>WAWCODE – „Koduj dla Warszawy” to bezpłatny 24-godzinny turniej dla programistów, którego celem jest stworzenia aplikacji mobilnych oraz serwisów internetowych, które mogą ułatwić życie mieszkańcom miasta oraz turystom przybywającym do Warszawy. Uczestników wspierali będą mentorzy z warszawskich firm informatycznych. Wydarzenie potrwa 2 dni: w sobotę w godzinach 9:00-22:00 oraz w niedzielę w godzinach 9:00-20:00. Uczestnikom zapewniamy pełen catering oraz atrakcyjne nagrody dla najlepszych.</p><p><br></p><p>Hackathon dedykowany jest programistom języków: Java, C++, C#, PHP, Objectiv C, Ruby, Python, którzy chcą się rozwijać poznając nowe technologie i stworzyć ciekawe projekty służące miastu i jego mieszkańcom.</p><p><br></p><p>Wydarzenie odbędzie się w dniach 27-28 lutego 2016 roku w Google Campus Warsaw przy ul. Ząbkowskiej 27/31 w Warszawie.</p><p><a href="http://wawcode.pl/" target="_blank">Źródło</a><br></p>',
                    author: "admin",
                    image: "http://s19.postimg.org/41s8jy1w2/wawcode.jpg",
                    date: new Date(),
                    description: "Turniej którego celem jest stworzenia aplikacji, które mogą ułatwić życie mieszkańcom miasta.",
                    tags: ["WARSZAWA", "GOOGLE", "CAMPUS", "PAWEŁ", "NIEWĘGŁOWSKI", "SGGW", "SILVER.NET", "WAWCODE"],
                },
                {
                    title: "LUBCODE",
                    content: '<div>LUBCODE – „Koduj dla Lublina” to bezpłatny 36-godzinny turniej dla programistów, którego celem jest stworzenia aplikacji mobilnych oraz serwisów internetowych, które mogą ułatwić życie mieszkańcom miasta oraz turystom przybywającym do Lublina. Uczestników wspierali będą mentorzy z lubelskich firm informatycznych. Wydarzenie potrwa 2 dni w godzinach od 8:00 w sobotę do 20:00 w niedzielę. Uczestnikom zapewniamy pełen catering oraz atrakcyjne nagrody dla najlepszych.</div><div><br></div><div>Hackathon dedykowany jest programistom języków: Java, C++, C#, PHP, Objectiv C, którzy chcą się rozwijać poznając nowe technologie i stworzyć ciekawe projekty służące miastu i jego mieszkańcom.</div><div><br></div><div>Wydarzenie odbędzie się w dniach 9-10 kwietnia 2016 roku w Inkubatorze Technologicznym przy ul. Frezerów 3 w Lublinie.</div><div><a href="http://www.lubcode.pl/" target="_blank">Źródło</a><br></div>',
                    author: "admin",
                    image: "http://s19.postimg.org/w8joi6a6q/image.jpg",
                    date: new Date(),
                    description: "36-godzinny turniej którego celem jest stworzenia aplikacji dla Lublina.",
                    tags: ["36H", "LUBLIN", "PAWEŁ", "NIEWĘGŁOWSKIE", "DEVUP", "HACKATHON", "LUBCODE", "LUBCODE"],
                },
                {
                    title: "Battlehack",
                    content: '<p><br></p><p><span style="line-height: 14.5455px;"><iframe width="560" height="315" src="https://www.youtube.com/embed/DHhnYk38ZDM" frameborder="0" allowfullscreen=""></iframe><br></span></p><p><span style="line-height: 14.5455px;"><br></span></p><p><span style="line-height: 14.5455px;"><br></span></p><p><span style="line-height: 14.5455px;">November 14-15</span></p><p><span style="line-height: 14.5455px;"><br></span></p><p><span style="line-height: 14.5455px;">PayPal Town Hall&nbsp;</span></p><p><span style="line-height: 14.5455px;">2161 N. First Street&nbsp;</span></p><p><span style="line-height: 14.5455px;">San Jose, CA 95131</span></p><p><span style="line-height: 14.5455px;"><br></span></p><p><span style="line-height: 14.5455px;">A true global competition where the City Champions face off, compete, conquer and claim $100,000 USD and the title of The Ultimate Hackers For Good.</span></p><p><span style="line-height: 14.5455px;"><br></span></p><p><span style="line-height: 14.5455px;"><br></span><a href="https://2015.battlehack.org/" target="_blank">Źródło</a></p>',
                    author: "admin",
                    image: "https://dkfopyztvel7v.cloudfront.net/assets/2015/bh-2015-logo-0b4de4277ff47da6e0f0c4cba6a92aae.png",
                    date: new Date(),
                    description: "HELP YOUR COMMUNITY WIN AN EPIC AXE TROPHY AND A CHANCE AT 100K USD",
                    tags: ["BATTLEHACK", "HACKATHON", "INTERNATIONALLY", "INTERNATIONAL", "BERLIN", "LONDON", "BATTLEHACK", "BATTLEHACK"],
                }
            ];
            for (var i = 0; i < posts.length; i++)
                Posts.insert(posts[i]);
        }
    });
}
