---
layout: page
title: Why Software Sucks
permalink: /why_software_sucks/
---

<img src="/assets/bluescreen.jpg" alt="Windows bluescreen of death." width=500/>

Our world is completely reliant on software. 
Many of our most critical systems, from airplane navigation to power plant shutdown procedures, are completely automated by software.
Code is the backbone of the world’s economy: processing trillions of transactions per day and powering many of the world’s most profitable platforms. 
This time in history, the information age, is defined by the rapid and complete takeover of software over the last few decades. 
Furthermore, this takeover is showing no signs of slowing down.
Software is only going to get bigger and control more of our world as time goes on. 
However, the quality of the software ruling our world is, in many cases, terrible, and it only seems to be getting worse. 


There are many ways to measure the “quality” of software. 
The [ISO 25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) standard models on a number of categories: performance efficiency, reliability, compatibility, security, usability, and maintainability.
These metrics pertain to the structural quality of a piece of software, meaning they measure how well the software supports the delivery of its functional requirements.
The functional quality of software relates to how well it meets its own functional specifications.
For example, a calculator app which incorrectly computes the addition of two and two to be five would fail to meet its own functional specifications: to correctly carry out arithmetic calculations.
Thus, the functional quality would be lacking.
However, if the source code was needlessly complicated and/or obfuscated, or the application had a security vulnerability, then the software would be suffering from poor structural quality (namely in maintainability and security).
However, these two conceptions of quality are often closely related, due to the fact that poor structural quality often directly leads to a software “bug”: a defect in the software, produced by human error, which ultimately results in the failure of the software to carry out its intended purpose.
In our calculator example, poor structural quality could lead to a bug which results in the application crashing whenever you wish to subtract two numbers, and thus would fail to meet its own functional specifications.
The functional quality of a piece of software is often directly related to its own structural quality, and thus the two terms are often simply referred to under the umbrella term “software quality”.


Many would probably not object to the statement that software quality isn’t perfect.
Encountering some frustrating bug or having your application completely crash on you is an everyday occurrence: the internet stops working, a website takes forever to load, the user interface for an app is buggy, a computer “blue screens”, etc.
Technology is often more of a frustration than a convenience.
However, this may be chalked up to the fact that when everyday technology is working as intended, it’s invisible.
Because of this, we may be more susceptible to noticing the failure of technology, even if it ends up working 99% of the time.
Nonetheless, dealing with technical difficulties has become the normal and expected experience when dealing with software.


However, software quality has much greater consequences than a frustrating user experience.
Our society and our world is maintained and managed by software.
From airplane navigation systems to nuclear power plant shut down procedures, whether or not a piece of software works as intended can be the difference between life and death.
Because of the great responsibility these systems have, they often come under attack by malicious hacker groups.
A recent example of this was the [Colonial Pipeline Security Breach](https://www.nytimes.com/2021/05/08/us/politics/cyberattack-colonial-pipeline.html), which shutdown one of America’s largest oil pipelines and resulted in a ransom payout of over four million dollars.
These malicious hackers, often referred to as “black hat” hackers, exploit bugs in software in order to breach security.
If software quality is not taken seriously, systems are left extremely vulnerable to attack.
The importance of quality software isn’t only for the convenience of consumers or for the profit of companies: it is imperative to the safety and security of the critical systems which run our world.


<img src="/assets/colonial_pipeline_headline.png" alt="Headline of Colonial Pipeline attack."/>

So the question is: how did we get here? Why, after over 70 years of experience and billions of dollars of investment, does the field of software engineering seem to be declining in quality? Why do so many in the industry share the feeling that the modern state of software is the worst it’s ever been? At first glance, the idea that software quality is stagnating or even declining over time seems counterintuitive.
Usually in other engineering fields the quality of engineering improves in relation to the advancements in technology.
However, the software field has had faster advancements in technology than any other engineering field in history.
The machines which current software engineers work with are several orders of magnitude faster than the machines from less than a generation ago.
For example, in 1978 Intel released their [16-bit 8086 processor](https://en.wikipedia.org/wiki/Intel_8086#Performance).
It had a clock speed of 10 megahertz and a feature size of 3 µm (3 ten-thousandths of a centimeter).
Nowadays, the latest [11th Generation Intel® Core™ i9 Processors](https://www.intel.com/content/www/us/en/products/details/processors/core/i9.html) have a clock speed of 4.90 gigahertz and a feature size of 14 nm (14 ten-millionths of a centimeter).
However, this exponential growth of processing power has been of no substantial benefit to the quality of our software. 


In his [1972 ACM Turing Award lecture](https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD340.html), Edsger Dijkstra remarked that, in the early days of programming (1950’s), many believed that “programming would no longer be a problem” once more powerful machines would become available.
Back then, the power of machines was so limited that the primary role of the programmer was to come up with clever tricks which would lower the running time of their program.
However, Dijkstra pointed out that just the opposite happened: more powerful machines only introduced more problems.
This is due to the fact that with greater processing power came a greater ambition to apply the full potential of these machines, which left the programmer “in this exploded field of tension between ends and means”.
The possibilities of what can be accomplished with software grows as computer technology does.
Djikstra’s observations of this phenomenon back in the 70’s are only more prevalent today, as hardware has only further progressed.


This principle is sometimes encapsulated with the phrase “what Andy giveth, Bill taketh away”, or simply the [“Andy and Bill’s Law”](https://en.wikipedia.org/wiki/Andy_and_Bill%27s_law), in reference to the relationship Microsoft had with Intel in the 1990’s.
Some believed that Microsoft wasn’t utilizing the full potential of Intel’s chips, and instead riding on the sheer processing speed to simply add more features and complication, instead of aiming to achieve optimum performance.
This perhaps explains why computers are thousands of times faster today, but our software isn’t thousands of times more performant.
Basic functions such as opening a text file or loading a web page take far longer than they should in relation to the processing power of the machine. 


Unlike the wise grey-bearded programmers of the past, today’s programmers can write extremely complex and feature-full programs, without having to worry much about performance.
The amazing abilities of our machines acts as a crutch, greatly increasing the potential of what we can achieve, but also allowing poorly written software to exist.
As I mentioned earlier, in the early days of computing, processing power was so limited that a large portion of a programmer's job was simply using clever tricks to get the program to run at a reasonable speed.
Furthermore, avoiding bugs was extremely important, due to compilation times potentially taking hours and CPU time being extremely expensive.
Nowadays, compilation is basically instantaneous, CPU time is cheap, and the extreme processing power lets you write bad code and get away with it.
I believe that our technological progress has allowed the proliferation of slow, buggy, and needlessly complex software. 


Complexity is an inextricable part of software.
Many pieces of software have so many features and interactions that the complexity is difficult to comprehend.
Casey Muratori, a software developer and game engine researcher with several decades of experience, dubs this issue [“The Thirty Million Line Problem”](https://www.youtube.com/watch?v=kZRE7HIO3vk&t=2493s).
He claims that the state of software quality is inversely related to the rise of software complexity.
His measure of complexity is based on the number of lines of code a piece of software has.
The line count of modern day software is staggering.
Muratori estimates that, at the minimum, completing a simple task such as loading a webpage relies on over 50 million lines of code.
From the computer firmware, the operating system, the web browser, the router firmware, and the machine hosting the web page, the total complexity quickly adds up. 


<figure>
<img src="/assets/linux_loc.png" alt="Chart of total lines of code of the linux kernel over time." width=500/>
<figcaption>Total lines of code of the Linux kernel over time. Source: https://caseymuratori.com/blog_0031</figcaption>
</figure>


To handle this complexity, programmers use abstraction.
Dijkstra said that “the effective exploitation of abstraction must be regarded as one of the most vital activities of a competent programmer”.
Abstraction allows you to not have to understand all those millions of lines of code in order to write a program.
Software is rarely ever written from scratch, but is usually built upon an abstraction layer.
For instance, when making your own website, you don’t have to worry about what type of computer someone is using to visit your website.
The web browser is the abstraction layer: it hides that complexity.
All you have to know about an abstraction layer is how to interact with it.a
It’s like if you order a package on Amazon, you don’t care how it gets to you, all you care about is that it does eventually get to you.
However, what happens when your package gets lost in shipping? This is what Joel Spolsky, Trello founder and former Stack Overflow CEO calls a [leaky abstraction](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/): the abstraction fails and the complexity leaks through.
His universal law of programming, which he calls “The Law of Leaky Abstractions”, states this: 

>***"All non-trivial abstractions are leaky."***

When abstractions fail, the bug bubbles up and is felt through all of the layers.
Due to the numerous layers and the millions of lines of code, tracking down this leak can be nearly impossible.
This is why sometimes your computer randomly crashes and often the best advice for getting something to work is to just turn it off and then back on.
The underlying issue is lost in the web of complexity.


One solution to this problem is to simply understand every single abstraction layer.
However, this is far easier said than done.
Nonetheless, Nelson Elhage, a former staff engineer of Stripe, [argues](https://blog.nelhage.com/post/computers-can-be-understood/) that having some understanding of the underlying system you’re building on top of is absolutely vital for writing performant and quality code.
Furthermore, the trickiest bugs often “require the ability to view a behavior from multiple levels of abstractions at once”, so being comfortable traversing these layers is a vital skill.
Because of this, software engineers should be educated on all layers of software, from the lowest level architecture of the CPU to the higher level of web development and everywhere in between.
Educational institutions should strive to ensure that students have a grasp of all of these different aspects of computer science.
However, as the job market becomes more competitive, demand for more specialized roles increases.
This specialization could be detrimental, leading to engineers having a great deal of understanding of only their area of expertise, but ultimately not familiar with the layers above and below.
Furthermore, the rising popularity of coding bootcamps could further exacerbate this issue.
Coding bootcamps are training courses, usually not affiliated with any educational institutions, which are designed to train software engineers so that they can get a job.
Bootcamps are rising in popularity due to their affordability and focus on purely gaining employable skills.
However, some of these camps are relatively short (10-14 weeks), and often are very narrowly focused on specific skills, such as only web development.
An engineer only trained at this type of camp could end up only being knowledgeable of the specific framework they were trained in, which could cause further software bugs to arise due to ignorance of the underlying abstraction layers. 


Another solution to writing quality software is to avoid complexity in the first place.
In his talk, [“Simple Made Easy”](https://www.youtube.com/watch?v=oytL881p-nQ), Rick Hickey argues that it is far easier to write complex code than to write simple code.
While this may seem counterintuitive, writing simple code requires constant effort and vigilance.
Distilling a complex algorithm into something simple and easy to understand takes a deeper understanding than writing code which is complex and messy.
Furthermore, a programmer under strict deadlines will often focus on writing this “easy” (yet complex) code in order to ship a working product.
“Ease” is subjective, so a piece of complex code that one programmer easily wrote can be indecipherable to another.
Because of this, complex code can reduce maintainability, and can make tracking down bugs far harder.
Simplicity, on the other hand, can be measured with objective code quality guidelines.
The key to writing good software is to have the program made up of simple components. 


In a similar vein, Dijkstra encouraged software engineers to be “fully aware of the strictly limited size of his own skull” and to approach programming tasks “with full humility”, avoiding “clever tricks like the plague”.
He believed that this sort of complexity is what bogged down programs, and ultimately led to the most bugs.
Quality should be aimed for as a first principle, such that “correctness proof and program” would grow together.
He argued that quality should not be simply an afterthought which would be attained with testing after the fact.
In his talk, Hickey refers to this type of quality assurance as “driving by the guardrails”: as a driver, you don’t simply hold the accelerator and let the guardrails get you to your destination.
In programming, only relying on tests after the fact in order to check software quality is the same as “driving by the guardrails”.
Quality should be pursued from the beginning of development, and should be incorporated into the development process every step of the way.
This is achieved by consistent and thorough testing, as well as tools and languages which support writing safe and quality code.
Recognizing the limits of the human mind and our inability to adequately deal with large amounts of complexity is the first step to ensuring our software is high quality.
If we focus on writing simple, well-tested components, the level of quality of software will rise.


It’s not as if this idea of writing simple code is alien to programmers.
Many of them are well aware that quality code produces quality software.
The issue is that their managers don’t always place the same emphasis on writing simple code.
Scott Moore, who’s been a developer specializing in application performance engineering and testing for the past 20 years, [writes that](https://www.linkedin.com/pulse/20-years-later-we-any-better-software-quality-scott-moore) in many cases, the position of Quality Assurance in a company is really more “Quality Advisor”.
This is because oftentimes the QA does not have the ability to stop a release, meaning poor quality software can end up being released, even without the consent of the QA.
Moore argues much of this is due to some of the strategies currently employed in software companies, such as Agile and DevOps, which prioritize time to market over everything else.
Companies often would prefer to focus their resources on more features for their product or additional marketing instead of ensuring software quality.
This emphasis on getting out products as fast as possible, disregarding quality, only hurts the consumer, as users have to waste time and money wading through sub-par products.
Moore believes there is overall a lack of advocacy for the software quality professional, meaning decisions from management and marketing will take precedence over decisions from QA.
The culture and values of software companies need to change to place a higher value on quality. 


It is often thought that with time, barring any global catastrophe, technology naturally progresses, and overall the wealth of human knowledge grows larger.
However, there are many examples of knowledge being lost between generations, simply due to it not being taught to a sufficient number of people.
Some historical examples of this is the lost knowledge of Roman concrete or Greek fire, but this problem could occur in the tech industry.
The fact that computer technology has gotten to the point that it has is a testament to human ability and ingenuity.
However, if we wish to continue this upward trend of human progress, we need to make a concerted effort to improve upon what we have already achieved.
The knowledge of how to write good code must be taught to all those who wish to become computer programmers.
Companies must put code quality as their number one priority for their products.
Just as the universe naturally tends toward entropy, our abilities and knowledge of software engineering will stagnate and decline if left unchecked.
Modern day software quality is in a mediocre state, and we need to begin to seriously think about how to make a change. 
