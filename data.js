var images=["snowflakes.webp"];

//Sport section
var sportsHeaders=["Liverpool hopeful over Van Dijk return for Club World Cup final","Liverpool wins its first ever Club World Cup football title","Barcelona vs Madrid ends 0:0 for first time in 17 years amid clashes","US World Cup hero Rapinoe wins women's Ballon d'Or 2019","Brazilian Mikaili Sol wins Kiteboarding World Championships","Tennis: France claim Fed Cup title with 3-2 win over Australia"];
var sportsHeaders2=["Liverpool boss Jurgen Klopp is hopeful centre-back Virgil van Dijk will be fit to return for Saturday's Fifa Club World Cup final against Flamengo.",
"Liverpool has beaten Flamengo to win its first ever Club World Cup football title.",
"El Clasico, the biggest match in the Spanish football calendar, has ended 0:0 in the highly anticipated game between Barcelona and Real Madrid",
"Megan Rapinoe won the women's Ballon d'Or on Monday, after her heroics helped the United States to World Cup glory in France this summer.",
"Colombian Valentin Rodriguez and Brazil's Mikaili Sol soared to success in the freestyle Kiteboarding World Championships in Combuco on Saturday.",
"France claimed their first Fed Cup title in 16 years on Sunday with a 3-2 victory after defeating hosts Australia in the decisive doubles rubber in the final in Perth"];
var sportsImages=["liverpool.jpg","l1.jpg","clasico.png","wcup.png","kite.png","tennis.png"];
var sportsText={
    text0:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>The Dutchman missed the 2-1 semi-final win against Monterrey on Thursday through illness.Klopp confirmed Van Dijk trained on Friday and he will be assessed at the end of the session.<br>The game, which kicks off at 17:30 GMT, will be live on BBC One, iPlayer and the BBC Sport website.With Joel Matip and Dejan Lovren also absent, Jordan Henderson dropped into central defence to partner Joe Gomez in Wednesday\'s semi-final.<br>Fabinho is also missing for the Premier League leaders, while Georginio Wijnaldum, who travelled to Qatar despite picking up a muscle injury in last weekend\'s win over Watford, is again likely to be unavailable after not training.<br>"We have no new injury concerns," Klopp added. "We played on Wednesday and now it\'s Friday so we are using each hour for recovery and then we will see who we can line up."</p>' 						
    },
    text1:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>Roberto Firmino took Liverpool to victory by scoring a goal in extra time to end on 1-0 in the Qatari capital. Liverpool captain Jordan Henderson broke Flamengo\’s defense by passing to Sadio Mane, who squared to Firmino for him to make the winning goal.<br>Liverpool has been allowed to avenge the loss to Flamengo in the 1981 single-game version of this competition.<br>Liverpool will add the world title to its sixth European Cup. The team\’s pursuit of the Premier League in England has also been aided by Leicester losing to Manchester City.<br>Liverpool will end the year on a high</p>' 						
    },
    text2:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>It is the first time in 17 years El Clasico has ended goalless and was marked by disturbances both during and after the game, including clashes with police.<br>The game also had to be stopped for a short time when pro-Catalon protesters threw beach balls onto the pitch.<br>The match was postponed back in October amid security concerns and took place overshadowed by political protests.<br>While in football terms the stakes couldn’t have been higher, with the fierce rivals neck and neck at the top of the La Liga table, El Clasico took place in the Catalan capital amid ongoing political protests.<br>The game was supposed to be played on October 26 but was called off following a wave of sometimes violent protests in Barcelona, a result of the jail sentences handed down to nine Catalan separatist leaders that month.<br><br></p><p>Highlights of the game:<video width="320" height="240" controls><source src=”images/game.mp4” type=video/mp4></video></p>'                       
    },
    text3:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>Having already picked up the FIFA Women\’s World Player of the Year in September, the 34-year-old forward was the favourite to win only the second ever women\’s Ballon d\'Or.<br>The Reign FC forward scored six goals in the World Cup and earned both the Golden Boot as the top scorer and the Golden Ball as the tournament\’s best player.<br>Rapinoe was not present at the ceremony to collect soccer\’s most prestigious individual accolade, but in a recorded message said: "I\'m so sad I can\'t make it tonight. It\’s absolutely incredible congrats to the other nominees. I can\'t believe I\'m the one winning in this field, it\’s been an incredible year."</p>'                       
    },
    text4:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>The 17-year-old Rodriguez snatched victory right at the end of the competition, beating Adeuri Corniel into second place with Spain\’s Liam Whaley third. <br>Just 15-years-old, Mikaili Sol took the women\’s title in front of her home fans, who were expecting big things after her victory in three out of four World Cup events during the year.<br>Compatriot Bruna Kajiya finished second ahead of Dutch rider Pippa van Iersel in third.</p>'                       
    },
    text5:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>Kristina Mladenovic and Caroline Garcia held firm in a tense decider to beat Ash Barty and Sam Stosur 6-4 6-3 at Perth Arena and secure France\’s third title in the women\’s team event.<br>France hoists the Fed Cup trophy for the first time since 2003, when Amelie Mauresmo led the French to a 4-1 win over the United States in the final in Moscow.</p>' 						
    }
};
//Technology section
var techHeaders=["Uber promises changes to avoid Germany ban","Facial recognition fails on race, government study says","Google goes offline after fibre cables cut","YouTube's top earners: Eight-year-old Ryan tops list with $26m","Facebook owns the four most downloaded apps of the decade","Digital isolation: The vulnerable people left behind"];
var techHeaders2=["Uber says it will make changes to avoid being banned in Germany, after a court ruled some of its processes did not respect local law.",
"A US government study suggests facial recognition algorithms are far less accurate at identifying African-American and Asian faces compared to Caucasian faces.",
"Severed fibre optic cables disrupted internet access in parts of eastern Europe, Iran and Turkey on Thursday",
"An eight-year-old boy who reviews toys has been named as the highest earning YouTuber, for the second year in a row.",
"The four most downloaded apps of the decade are all owned by Facebook, according to app tracker App Annie.",
"Whether it's banking, food delivery or a local taxi company, finding out your favourite services are available online is normally a happy moment - it's often faster and more convenient"];
var techImages=["uber.jpg","facial.jpg","fibre.jpg","youtube.jpg","yt1.png","facebook.jpg","fcb1.png","mobile.jpg"];
var techText={
    text0:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>In Germany, the app connects passengers to private hire vehicle and taxi firms, rather than independent drivers. <br>But trade body Taxi Deutschland complained that some of Uber\'s processes broke Germany\'s rules on passenger transport. <br>Uber said it would continue to operate in Germany while it made changes.</p><h3>What was the issue?</h3>In most countries where Uber operates, the company connects passengers with independent drivers who have signed up to offer rides in their cars. <br>In the UK and in some other countries, the drivers must be insured and - in some cases - require a license to offer rides to the public. <br>The company used to offer a service in Germany called UberPop, which connected riders with unlicensed drivers. <br>However, a German court banned it in 2015 following a complaint from Taxi Deutschland. <br>Since then, Uber has worked with licensed private hire vehicle companies in Germany, so passengers using the app get picked up by a driver from a traditional private hire firm. <br>But Taxi Deutschland said some of Uber\'s practices violated the country\s Passenger Transportation Act, which became law in the 1980s.<h3>How has Uber responded?</h3><p>In a statement, the company said: "We will assess the court\'s ruling and determine next steps to ensure our service in Germany continues. <br>"Working with licensed private hire vehicle operators and their professional drivers, we are committed to being a true partner to German cities for the long term." <br>The company is deciding whether to appeal against the court\'s finding. <br>It can continue to operate for now, but Taxi Deutschland said it would seek enforcement of the court\'s decision, which would see the company fined if it continued to offer rides.<em> By Chris Fox - Technology reporter </em></p>'                        
    },
    text1:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>African-American females were even more likely to be misidentified, it indicated. <br>It throws fresh doubt on whether such technology should be used by law enforcement agencies. <br>One critic called the results "shocking".<br>The National Institute of Standards and Technology (Nist) tested 189 algorithms from 99 developers, including Intel, Microsoft, Toshiba, and Chinese firms Tencent and DiDi Chuxing. <br><br>Algorithms in the Nist study were tested on two types of error:<ol><li>false positives, where software wrongly considers that photos of two different individuals show the same person</li><li>false negatives, where software fails to match two photos that show the same person</li></ol>"While it is usually incorrect to make statements across algorithms, we found empirical evidence for the existence of demographic differentials in the majority of the face recognition algorithms we studied," said Patrick Grother, a Nist computer scientist and the report\’s primary author<br>"While we do not explore what might cause these differentials, this data will be valuable to policymakers, developers and end users in thinking about the limitations and appropriate use of these algorithms." <br>One of the Chinese firms, SenseTime, whose algorithms were found to be inaccurate said it was the result of "bugs" which had now been addressed. <br>"The results are not reflective of our products, as they undergo thorough testing before entering the market. This is why our commercial solutions all report a high degree of accuracy," a spokesperson told the BBC. <br>Several US cities, including San Francisco and Oakland in California and Somerville, Massachusetts, have banned the use of facial recognition technology</p><p><em> By BBC - Technology</em></p>'                       
    },
    text2:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>The issue, which lasted for about two hours, was caused by multiple fibre cables being physically cut at the same time, a highly unusual thing to happen. <br>Google said its services were among those unavailable in the region for about 30 minutes. <br>The company told internet service providers to connect to its other servers to "route around the problem".<br>In a statement, the company blamed "multiple simultaneous fibre cuts", which are very rare. <br>BBC Monitoring confirmed that internet access in Bulgaria, Iran and Turkey had been disrupted for about two hours on Thursday morning. <br>Sadjad Bonabi, a director at Iran\’s Communications Infrastructure Company, said two cuts happened at once, one between Iran and Bucharest and the other on a line to Munich.<br>This disrupted traffic on one of the major fibre cables in the region. But Mr Bonabi said traffic had been routed on to "healthy" connections in western and southern Iran. </p>'                       
    },
     text3:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>Ryan, of Ryan\’s World, earned $26m (£20m) in 2019, up from $22m in 2018, according to an annual top-10 ranking by Forbes, based on estimated earnings between June 2018 and June 2019. <br>YouTube accounts Dude Perfect and Nastya came in second and third, with $20m and $18m respectively. <br>And between them, the 10 highest paid YouTubers of 2019 earned $162m. </p>'                       
    },
     text4:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>Facebook, Facebook Messenger, WhatsApp and Instagram top App Annie\’s list, which was published on Monday.The most downloaded app between 2010 and 2019 was Facebook\’s main app, followed by the company\’s Facebook Messenger app.WhatsApp came third, and Instagram fourth.Facebook bought Instagram in 2012 for $1bn (£760m), and WhatsApp in 2014 for $19bn.App Annie ranking highlights just how much power and control Facebook CEO Mark Zuckerberg has.The four main apps that Zuckerberg oversees boast more than a billion users each."It is not ok," said Taha Yasseri, a senior research fellow in computation science at the Oxford Internet Institute."One company owning four of the most popular social networking and communication apps, at best, can be described as a data monopoly."Mr Yasseri added: "Combined, the data from multiple platforms can lead to an extremely high level of precision in modelling our traits and behaviours. This amount of power should be regulated."<br>The UK "should tackle dominance of online giants," the UK\’s competition regulator said on Wednesday.The Competition and Markets Authority (CMA) raised concerns that people using these platforms may not be in control of their data. Snapchat and Skype came 5th and 6th, followed by TikTok and UC Browser, which is owned by China\’s Alibaba. YouTube came 9th and Twitter was in 10th place. Eight of the top 10 apps are owned by US corporations, while two are owned by Chinese firms.<br>"Mobile has been at the heart of major changes in consumer behaviour this decade," wrote Adithya Venkatraman, a markets insights manager at App Annie, in a blog. </p>'                       
    },
     text5:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>However, for the most vulnerable people in society, online services for essentials such as housing, job applications and benefits can be inaccessible.<br>Harvey is only 16, but is living in supported housing in Redruth, Cornwall, after experiencing a breakdown in communication with his family.<br>"I live in a shared house. It\’s a shared kitchen, but I get my own bedroom," explains Harvey. "The people I live with are pretty much my best mates at the minute.<br>He wants to find a job in the construction industry, saying: "The way my brain works is like a builder\’s mind. I like knowing how things are built and I want to help build stuff."<br>So Harvey is going to find a job and a permanent place to live - that\’s his plan. But unfortunately, most of the services he needs access to in order to get his life back on track involve using the internet and he\’s struggling to tackle what is called "digital isolation".<br>"Digital isolation is when people find themselves in a position where they can\'t access the internet or digital media and devices as much as other people", explains Bibi Reisdorf, an assistant professor in communication studies at the University of North Carolina at Charlotte<br>In theory, everyone can access the internet, maybe at a library, community centre or at a friend\’s house, but there are different levels of access."<br>Digital isolation is "surprisingly prevalent", according to Dr Reisdorf, with western countries seeing a rise in "mobile dependence". That doesn\'t mean people who are addicted to their mobile phones, it\’s when your mobile is your only access to the internet.<em> By Chris Quevatre - BBC News Online </em></p>'                       
    }
};

//Health section
var healthHeaders=["Vegans \'need to be aware of B12 deficiency risk\'","What's the best colour lighting for sleep?","Motor neurone disease 'linked to cholesterol'","Why do patients get ill with hospital-acquired infections?","Why Drinking Can Make You Feel Extra Anxious Over the Holidays","Study Finds Overeating Not Inactivity May Help Explain Child Obesity Rates","The Older You Are, the Less Narcissistic You Tend to Be"];
var healthHeaders2=["Experts are warning that people eating a vegan diet need to make sure they get enough B12 - because the risk of deficiency is \"not a myth\"",
"The idea artificial light from screens is keeping people awake at night is flawed, say scientists who have been studying the best type of lighting to nod off to",
"Scientists say they have discovered a possible underlying cause of the neurological disorder, motor neurone disease (MND).",
"In recent weeks the deaths of four patients at Glasgow hospitals - three of them babies or children - have been linked with infections picked up during their stay. So how big a danger are hospital-acquired infections?",
"Alcohol activates the GABA system causing us to feel less anxious and relaxed. If you stop drinking, your GABA system is still overcompensating and gets mixed up, leading to a spike in anxiety.Drinking can also impact your ability to get REM sleep, which can affect mood.Alcohol can help trigger a chemical that impacts the “flight or flight” response leading to anxiety",
"A new study looking at children in the Amazon found that diet, not a lack of physical activity, may be behind childhood obesity increase<br>The study found that children in the Amazon did not burn substantially more calories than their counterparts in developed urban countries.Experts say parents can encourage children to eat a healthy varied diet and stay active.","New research indicates that younger people tend to be more self-absorbed than older generations.This trend, researchers say, is true of all generations over the past century.Experts say people tend to become less narcissistic because the lessons learned over a lifetime have a way of humbling people."];
var healthImages=["vegans.jpg","light.jpg","ai.jpg","hospital.jpg","champ.jpg","weight.jpg","old.jpg"];
var healthText={
    text0:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>They were speaking ahead of \'Veganuary\', when increasing numbers turn to a vegan diet each January.<br>The diet is generally high in fibre and low in cholesterol, but some nutrients are harder to get enough of - including B12.<br>The Vegan Society said it was available in supplements or fortified foods.<br>Adults need around 1.5 micrograms of B12 a day.<br>It is found in meat, fish, eggs and dairy products, but not in fruits, vegetables or grains - so those eating a vegan diet are advised to eat fortified foods, like cereals, or take supplements.<br>B12 deficiency, which can lead to nerve damage, tends to take three or four years to cause symptoms - usually first appearing as pins and needles in the hands or feet.</p><h3>Nutritional planning \'essential\'</h3><p>There is limited data on the health effects of a vegan diet - with one UK and one US study covering around 10,000 people.So far, the evidence suggests people who are vegan are less likely to be overweight, and at less risk of type 2 diabetes and heart disease.But they appear to have a higher risk of bone fracture, and a recent study suggested an increased risk of haemorrhagic stroke. Heather Russell, dietitian at the Vegan Society, said: "Whether you\'re vegan or not, nutritional planning is essential for everyone."Going vegan is an opportunity to learn more about nutrition, including how to balance food groups and the roles of fortified foods and supplementation."For example, vegans obtain vitamin B12 from fortified foods or supplementation, and guidance is available on on the Vegan Society\’s website."</p>'                        
    },
    text1:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>According to the researchers, from Manchester University, this blue light from devices is not the main problem. They exposed mice to different light settings to study the impact.The controversial findings, in Current Biology journal, suggest the answer lies in how warm and bright a light is.</p>h3>Why do the study?</h3><p>Everyone has a natural, daily wake-sleep cycle. <br>Their body clock synchronises with the environment so they are alert in the daytime and sleepy at night. <br>But experts have long suspected exposure to artificial light might be upsetting this alignment. <br>And there is a popular view artificial blue light - the type that comes from computer screens and mobile phones - has a particularly strong effect. </p><h3>What did it find?</h3><p>The team did tests on mice, fixing the brightness to high or low and switching the colour from blue to yellow. <br>Bright light of either colour was stimulating, rather than restful, as expected. <br>But when the light was dimmed, blue light was more restful than yellow light. <br>Lead researcher Dr Tim Brown said the findings matched what happened in the natural world, with bright, warm daylight. <br>"During the daytime, the light that reaches us is relatively white or yellow and has a strong effect on the body clock and around twilight, once the Sun sets, the bluer the light becomes," he said. <br>"So if you want to avoid light having a strong effect on your body clock, dim and blue would be the way to go." <br>Conversely, bright white or yellow light was better for staying awake and alert.</p>'                         
    },
    text2:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>The University of Exeter team says it has found evidence that MND is linked to an imbalance of cholesterol and other fats in cells. <br>It says the research could lead to more accurate diagnosis and new treatments. <br>MND affects around 5,000 people in the UK and causes more than 2,000 deaths a year. </p><h3>What did the researchers find?</h3><p>Scientists at the University of Exeter say they had a "eureka moment" when they realised that 13 genes - which, if altered, can cause the condition - were directly involved in processing cholesterol.They say their theory could help predict the course and severity of the disease in patients and monitor the effect of potential new drugs. <br>The theory is outlined in a paper, published in Brain: A Journal of Neurology. <br>Lead author Prof Andrew Crosby said: "For years, we have known that a large number of genes are involved in motor neurone disease, but so far it hasn\'t been clear if there\’s a common underlying pathway that connects them." <br>The finding particularly relates to what is known as the "spastic paraplegias", where the malfunction is in the upper part of the spinal cord. <br>Dr Emma Baple, also from the University of Exeter Medical School, said: "Currently, there are no treatments available that can reverse or prevent progression of this group of disorders. Patients who are at high risk of motor neurone disease really want to know how their disease may progress and the age at which symptoms may develop, but that\’s very difficult to predict." <br>Dr Brian Dickie, director of research at the MND Association, said the work raises some interesting ideas. <br>"At the moment, it is unclear whether the imbalance observed is a cause of MND or a consequence of the disease. We look forward to seeing the outcome of further research in this area." </p>'                       
    },
    text3:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>By their very nature, hospitals are places with high concentrations of people who are unwell. Many of them have already picked up infections in the wider community. <br>Bacteria, viruses and fungi are constantly being brought into hospitals by patients, visitors and staff. The challenge for healthcare workers is how to stop these multiplying and spreading. <br>A complicating factor is that hospital patients often have weakened immune systems and are less well able to fight off disease. </p><h3>How common are such infections?</h3><p>Infections linked to Cryptococcus or Mucor are relatively rare - but "Staph" infections are much more common. <br>Staphylococcus aureus accounts for about 110 infections every month at Scottish hospitals. <br>Bacteria, viruses or other micro-organisms that cause disease are collectively known as pathogens - and there are a lot of them. Other common varieties found in hospitals are:<br>Escherichia coli - better known as E. coli. It\’s a bacteria found in the intestines of humans and animals. It can be spread through contaminated food, touching animals or poor hygiene. Some strains such as E. coli O157 produce toxins that can make people very ill but most people get better without medical treatment. There are nearly 400 cases a month reported at Scottish hospitals. <br>Clostridioides difficile - previously known as Clostridium difficile and abbreviated to C. diff. A very common type of bacteria, particularly prevalent in the soil which can cause a bowel infection and diarrhoea. It can particularly affect people who have been treated with antibiotics or who have been in hospital for a long time. Nearly 350 cases are reported a month on average at Scottish hospitals.</p>'                       
    },
    text4:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>For many people, drinking and the holidays go hand in hand.Between the work parties, festive get-togethers, and influx of family members, there are plenty of opportunities to get caught up in a whirlwind of drinking.<br>In fact, the stretch before Christmas leading through New Year\’s Day accounts for more binge drinking episodes than any other point in the year, according to the American Addiction Centers.<br>And all the alcohol-infused cheer going around often comes with a painful aftershock.<br>Yes, there are the standard hangover symptoms — pounding headaches, bouts of nausea, and an uncompromisable need for total silence — but many people also experience heightened levels of anxiety, a term the internet has dubbed “hangxiety.”<br>So, in light of the upcoming holidays — and, therefore, all the champagne and spiked eggnog you\’re about to serve up — we wanted to get to the bottom of why drinking can give us more anxiety in the days that follow. </p><h3>Alcohol can also be stimulating</h3><p>Alcohol can also be stimulating, according to Dr. John Krystal, the chair of the department of psychiatry at Yale Medicine.<br>Some people may find that a glass of wine or beer will cause them to feel more stimulated. Krystal says this may be due to alcohol\’s ability to increase norepinephrine levels in the body, which is a chemical involved in our body\’s “fight or flight” response to fear or stress.<br>This rush of norepinephrine can play out in a couple of ways.<br> “While some people may find the effects of norepinephrine to be pleasurable, others — particularly people with symptoms associated with panic disorder or PTSD — may be very sensitive to the ability of norepinephrine to trigger anxiety,” Krystal said. </p>'                       
    },
    text5:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>The childhood obesity epidemic is often blamed on children being far less active than previous generations. But what if the problem is far more simple than that?<br>Researchers studied children in the U.S. and U.K., and compared them with the children of a hunter-gatherer tribe in the Amazon to discover differences in physical activity and the amount of calories they burned.<br>What they found was incredibly surprising.<br>Hunter-gatherer children don\’t spend more calories in their everyday lives than children in the U.S., but they do spend calories differently.</p><h3>The bottom line</h3><p>Exciting new research suggests there are limits to how many calories can be burned exercising.According to researchers, there are limits to how many calories we can burn daily. Past that point, we take energy away from other bodily processes but don\’t use up any extra. Experts emphasize that physical activity is still an important part of a healthy lifestyle and should be combined with healthy food choices to optimize health.</p>'                        
    },
     text6:function(){       
        var text=document.getElementById("bigArticleTextContent");
        text.innerHTML='<p>Are younger people more prone to self-centered behavior?A new study suggests they just might be.<br>Researchers say they\’ve discovered that most people do become less narcissistic as they get older.People who are self-absorbed tend to remain more narcissistic over their lifespan than people who are naturally empathetic, according to William J. Chopik, PhD, an assistant professor at Michigan State University, and Kevin J. Grimm, PhD, a professor at Arizona State University.<br>However, these traits tend to lessen as people get older.“We found that more maladaptive forms of narcissism [such as hypersensitivity and willfulness] declined across life, and individual autonomy increased across life,” the study researchers wrote.<br>“Narcissism is a real thing, but it does get better over time,” Dr. Chopik told Healthline. “Most people encounter things in life that makes them more humble. A first job, where you have to work as part of a team, can make you more selfless. Being a good relationship partner requires taking someone else\’s perspective.”<br>However, how much people adapt during their lifetime can vary greatly.“Some people change dramatically while others don\’t change at all,” he said. “One of the big mysteries in all of personality research is why people change.”</p>'                        
    }
};