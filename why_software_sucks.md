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



In his 1972 ACM Turing Award lecture, Edsger Dijkstra remarked that, in the early days of programming (1950’s), many believed that “programming would no longer be a problem” once more powerful machines would become available.
Back then, the power of machines was so limited that the primary role of the programmer was to come up with clever tricks which would lower the running time of their program.
However, Dijkstra pointed out that just the opposite happened: more powerful machines only introduced more problems.
This is due to the fact that with greater processing power came a greater ambition to apply the full potential of these machines, which left the programmer “in this exploded field of tension between ends and means” (Dijkstra).
The possibilities of what can be accomplished with software grows as computer technology does.
Djikstra’s observations of this phenomenon back in the 70’s are only more prevalent today, as hardware has only further progressed.


