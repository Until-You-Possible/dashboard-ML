import * as React from 'react';
import "./Index.css";

import typeofAIImagePath from  "../../image/what-is-artificial-intelligence-types.svg";
import techAIImagePath from  "../../image/what-is-artificial-intelligence-technologies.svg";

function WhatIsAI() {
    return (
        <div className="AIContainer">

            {/*AI definition start */}
            <h1>What is artificial intelligence?</h1>
            <div className="definitionAI">
                An early definition of artificial intelligence (AI) came from
                one of its founding fathers, Martin Minsky, who described it as “the science of making machines
                do things that would require intelligence if done by men.” While the core of that definition holds true today,
                modern computer scientists go a bit further and define AI as a system that is able to perceive its environment and
                take actions to maximize the chance of successfully achieving its goals – and furthermore,
                that system’s ability to interpret and analyze data in such a way that it learns and adapts as it goes.
            </div>
            {/*AI definition end */}

            {/*history of ai start*/}
            <h2 className="mainTitleH">History of AI?</h2>
            <div className="historyAI">
                <p>
                    From the Greek myth of Pygmalion to the Victorian tale of Frankenstein,
                    humans have long been fascinated by the idea of creating a man-made being that could think and act like a person.
                    With the rise of computers, we realized that the vision of artificial intelligence would emerge not in the form of self-contained,
                    independent entities – but as a set of tools and connected technologies that could augment and adapt to human needs.
                </p>
                <br/>
                <p>
                    The term artificial intelligence was coined in 1956, at a scientific conference at Dartmouth University in Hanover,
                    New Hampshire. Since then, AI and data management have developed in an extremely interdependent fashion.
                    In order to perform meaningfully robust analyses, AI requires a lot of Big Data. In order for a lot of data to be digitally processed,
                    the system requires AI. As such, the history of AI has developed alongside the rise in computing power and database technologies.
                </p>
                <br/>
                <p>
                    Today, business systems that could once only handle a few gigabytes of data can now manage terabytes and can use AI to process outcomes and insights in real time.
                    And unlike a man-made creation lurching down to the village, AI technologies are agile and responsive – designed to improve and augment their human partners,
                    not replace them.
                </p>

            </div>
            {/*history of ai end*/}

            {/*type of ai start */}
            <h2 className="mainTitleH">History of AI?</h2>
            <div className="typeOfAI">
                <p style={{ marginBottom: '80px'}}>
                    AI is one of the fastest-growing areas of technological development.
                    Yet today, even the most complex AI models are only making use of “artificial narrow intelligence,” which is the most basic of the three types of AI.
                    The other two are still the stuff of science fiction and, at the moment,
                    are not being used in any practical way. That said, at the rate computer science has advanced in the past 50 years,
                    it’s difficult to say where the future of AI will take us.
                </p>
                <br/>
                <img src={typeofAIImagePath} alt="type of ai"/>

            </div>
            {/*type of ai end */}

            {/*different type of ai  start*/}
            <h2 className="mainSubTitleH">Artificial narrow intelligence (ANI)</h2>
            <div className="ANIContainer">
                ANI is the kind of AI that exists today and is also known as “weak” AI.
                While the tasks narrow AI can perform may be driven by highly complex algorithms and neural networks,
                they are nonetheless singular and goal-oriented. Facial recognition, internet searches,
                and self-driving cars are all examples of narrow AI. It is categorized as weak not because it lacks scope and power,
                but because it is still a long way from having the human components we ascribe to true intelligence.
                The philosopher John Searle defines narrow AI as being “useful for testing a hypothesis about minds,
                but would not actually be minds.”
            </div>
            <h2 className="mainSubTitleH">Artificial general intelligence (AGI)</h2>
            <div className="ANIContainer">
                <p>
                    AGI should be able to successfully perform any intellectual task that a human can. Like narrow AI systems,
                    AGI systems can learn from experience and can spot and predict patterns – but they have the capacity to take it a step further.
                    AGI can extrapolate that knowledge across a wide range of tasks and situations that are not addressed by previously acquired data nor existing algorithms.
                </p>
                <p>
                    The Summit Supercomputer is one of only a few such supercomputers in the world that demonstrates AGI.
                    It can perform 200 quadrillion computations in one second – which would take a human a billion years to do.
                    For AGI models to be meaningfully feasible, they wouldn’t necessarily need that much power,
                    but they would require computational capacities that currently only exist at supercomputer levels.

                </p>
            </div>
            <h2 className="mainSubTitleH">Artificial superintelligence (ASI)</h2>
            <div className="ANIContainer">
                <p>
                    ASI systems are theoretically fully self-aware.
                    Beyond simply mimicking or understanding human behavior, they grasp it at a fundamental level.
                </p>
                <p>
                    Empowered with these human traits – and further augmented with processing and analytical power that far exceeds our own – ASI can seem to present a dystopian,
                    sci-fi future in which humans become increasingly obsolete.
                </p>
                <p>
                    It is unlikely that anyone living today will ever see such a world, but that said,
                    AI is advancing at such a rate that it is important to consider ethical guidelines and stewardship in anticipation of an artificial intelligence
                    that could surpass us in almost every measurable way. As Stephen Hawking advises, “Because of the great potential of AI, it is important to research how to reap its benefits while avoiding potential pitfalls.”
                </p>
            </div>

            {/*different type of ai  end*/}

            {/*benefit of at start*/}
            <h2 className="mainTitleH">Benefits of AI</h2>
            <div className="benefitsIA">
                <p>
                    1: Business-wide resilience: Long before computers existed,
                    companies knew the value of gathering and understanding data about their business,
                    market, and customers. As data sets grew larger and more complex,
                    the ability to analyze that data accurately and in a timely way became increasingly challenging.
                    AI-powered solutions bring the ability to not only manage Big Data,
                    but to take actionable insights from it. With AI, complex processes can be automated,
                    resources can be more efficiently used,
                    and disruptions (and opportunities) can be better predicted and adapted for.
                </p>
                <p>
                    2: Better customer service: AI allows businesses to personalize service offerings and interact with their customers in real time.
                    As consumers move through the modern sales funnel from “lead” to “conversion,” they generate complex and diverse data sets.
                    AI gives business systems the power to leverage this data and to better serve and engage with their customers.
                </p>
                <p>
                    3: Confident decision-making: Good business leaders always strive to make decisions that are prompt and informed.
                    The more crucial the decision, the greater the likelihood
                    that it will have myriad and complex components and interdependencies.
                    AI helps to augment the wisdom and experience of humans,
                    with advanced data analysis and actionable insights that support confident, real-time decision-making
                </p>
                <p>
                    4: Relevant products and services: Many traditional R&D models were backward-looking.
                    The analysis of performance and customer feedback data often didn’t occur until well after a product or service had entered the market.
                    Nor were systems in place that could quickly spot potential gaps and opportunities in the market.
                    With AI-powered systems, companies can look at a wide variety of data sets, simultaneously and in real time.
                    This allows them to modify existing products and introduce new ones, based upon the most relevant and up-to-date market and customer data.
                </p>
                <p>
                    5: Engaged workforces: A recent Gallup poll shows that companies whose employees report a high level of engagement are up to 21% more profitable on average.
                    AI technologies in the workplace can reduce the burden of mundane tasks and allow employees to focus on more fulfilling work. HR technologies
                    that use AI can also help to notice when employees are anxious,
                    tired, or bored. By personalizing wellness recommendations and helping to prioritize tasks,
                    AI can support employees and help them restore a healthy work-life balance.
                </p>
            </div>
            {/*benefit of at end*/}

            {/*AI technologies start*/}
            <h2 className="mainTitleH">AI technologies</h2>
            <div className="">
                <p style={{ marginBottom: '80px'}}>
                    In order to be useful, AI must be applicable. Its true value can only be realized when it delivers actionable insights.
                    If we think of AI in terms of a human brain, then AI technologies are like the hands,
                    the eyes, and the movements of the body – all that allows the brain’s ideas to be executed.
                    The following are some of the most widely used and rapidly-advancing AI technologies.
                </p>
                <img src={techAIImagePath} alt="ai tech"/>
            </div>
            <h2 className="mainSubTitleH">Machine learning</h2>
            <div>
                <p>
                    Machine learning – and all its components – is a subset of AI. In machine learning,
                    algorithms are applied to different types of learning methods and analysis techniques,
                    which allow the system to automatically learn and improve from experience without being explicitly programmed.
                    For businesses, machine learning can be applied to any problem or goal that requires predictive outcomes,
                    arrived at from complex data analysis.
                </p>
                <p>
                    What is the difference between AI and machine learning? Machine learning is a component of AI and cannot exist without it.
                    So it’s not so much that they are different – as how they are different.
                    AI processes data to make decisions and predictions.
                    Machine learning algorithms allow AI to not only process that data,
                    but to use it to learn and get smarter, without needing any additional programming.
                </p>
            </div>
            <h2 className="mainSubTitleH">Natural language processing (NLP)</h2>
            <div>
                <p>
                    NLP allows machines to recognize and understand written language,
                    voice commands, or both. This includes the ability to translate human language into a form that the algorithm can understand.
                    Natural language generation (NLG) is a subset of NLP that allows the machine to convert digital language into natural human language.
                    In more sophisticated applications, NLP can use context to infer attitude,
                    mood, and other subjective qualities to most accurately interpret meaning.
                    Practical applications of NLP include chatbots and digital voice assistants such as Siri and Alexa.
                </p>
            </div>
            {/*AI technologies end*/}


        </div>
    );
}

export default WhatIsAI;