import * as React from 'react';
import techMLImagePath from  "../../image/what-is-machine-learning-ai-vs.svg";
import processMLImagePath from "../../image/what-is-machine-learning-process.svg";

function WhatIsML() {
    return (
        <div className="AIContainer">
            <h1>Machine learning definition in detail</h1>
            <div className="definitionAI">
                <p>
                    Machine learning is a subset of artificial intelligence (AI).
                    It is focused on teaching computers to learn from data and to improve with experience – instead of being explicitly programmed to do so.
                    In machine learning, algorithms are trained to find patterns and correlations in large data sets and
                    to make the best decisions and predictions based on that analysis. Machine learning applications improve with
                    use and become more accurate the more data they have access to.
                </p>
                <p>
                    Applications of machine learning are all around us –in our homes, our shopping carts, our entertainment media, and our healthcare.
                </p>
            </div>

            <h1>How is machine learning related to AI?</h1>
            <div >
                <p>
                    Machine learning – and its components of deep learning and neural networks –
                    all fit as concentric subsets of AI. AI processes data to make decisions and predictions.
                    Machine learning algorithms allow AI to not only process that data,
                    but to use it to learn and get smarter, without needing any additional programming.
                    Artificial intelligence is the parent of all the machine learning subsets beneath it.
                    Within the first subset is machine learning; within that is deep learning, and then neural networks within that.
                </p>
                <img width="70%" style={{margin: '80px auto', display: 'block'}} src={techMLImagePath} alt="ML related to AI"/>
            </div>

            <h2 className="mainSubTitleH">What is a neural network?</h2>
            <div className="ANIContainer">
                <p>
                    An artificial neural network (ANN) is modeled on the neurons in a biological brain. Artificial
                    neurons are called nodes and are clustered together in multiple layers, operating in parallel.
                    When an artificial neuron receives a numerical signal, it processes it and signals the other neurons connected to it. As in a human brain,
                    neural reinforcement results in improved pattern recognition, expertise, and overall learning.
                </p>
            </div>

            <h2 className="mainSubTitleH">What is deep learning?</h2>
            <div className="ANIContainer">
                <p>
                    This kind of machine learning is called “deep” because it includes many layers of the neural network and massive volumes of complex and disparate data.
                    To achieve deep learning, the system engages with multiple layers in the network, extracting increasingly higher-level outputs. For example,
                    a deep learning system that is processing nature images and looking for Gloriosa daisies will – at the first layer – recognize a plant.
                    As it moves through the neural layers, it will then identify a flower, then a daisy, and finally a Gloriosa daisy.
                    Examples of deep learning applications include speech recognition, image classification, and pharmaceutical analysis.
                </p>
            </div>

            <h2 className="mainTitleH">How does machine learning work?</h2>
            <div>
                <p>
                    Machine learning is comprised of different types of machine learning models,
                    using various algorithmic techniques.
                    Depending upon the nature of the data and the desired outcome,
                    one of four learning models can be used: supervised, unsupervised,
                    semi-supervised, or reinforcement. Within each of those models, one or more algorithmic techniques may be applied –
                    relative to the data sets in use and the intended results. Machine learning algorithms are basically designed to classify things, find patterns,
                    predict outcomes, and make informed decisions.
                    Algorithms can be used one at a time or combined to achieve the best possible accuracy when complex and more unpredictable data is involved.
                </p>
                <img style={{margin: '80px auto', display: 'block'}}  src={processMLImagePath} alt="ML related to AI"/>
            </div>

            <h2 className="mainSubTitleH">What is supervised learning?</h2>
            <div className="ANIContainer">
                <p>
                    Supervised learning is the first of four machine learning models.
                    In supervised learning algorithms, the machine is taught by example.
                    Supervised learning models consist of “input” and “output” data pairs,
                    where the output is labeled with the desired value. For example,
                    let’s say the goal is for the machine to tell the difference between daisies and pansies.
                    One binary input data pair includes both an image of a daisy and an image of a pansy.
                    The desired outcome for that particular pair is to pick the daisy, so it will be pre-identified as the correct outcome.
                </p>
                <p>
                    By way of an algorithm, the system compiles all of this training data over time and begins to determine correlative similarities,
                    differences, and other points of logic – until it can predict the answers for daisy-or-pansy questions all by itself.
                    It is the equivalent of giving a child a set of problems with an answer key,
                    then asking them to show their work and explain their logic.
                    Supervised learning models are used in many of the applications
                    we interact with every day, such as recommendation engines for products and traffic analysis apps like Waze,
                    which predict the fastest route at different times of day.
                </p>
            </div>

            <h2 className="mainSubTitleH">What is unsupervised learning?</h2>
            <div className="ANIContainer">
                <p>
                    Unsupervised learning is the second of the four machine learning models.
                    In unsupervised learning models, there is no answer key.
                    The machine studies the input data – much of which is unlabeled and unstructured – and begins to identify patterns and correlations,
                    using all the relevant, accessible data. In many ways,
                    unsupervised learning is modeled on how humans observe the world.
                    We use intuition and experience to group things together.
                    As we experience more and more examples of something,
                    our ability to categorize and identify it becomes increasingly accurate. For machines, “experience” is defined by the amount of data that is input and made available.
                    Common examples of unsupervised learning applications include facial recognition, gene sequence analysis, market research, and cybersecurity.
                </p>
            </div>

            <h2 className="mainSubTitleH">What is semi-supervised learning?</h2>
            <div className="ANIContainer">
                <p>
                    Semi-supervised learning is the third of four machine learning models.
                    In a perfect world, all data would be structured and labeled before being input into a system. But since that is obviously not feasible,
                    semi-supervised learning becomes a workable solution when vast amounts of raw, unstructured data are present.
                    This model consists of inputting small amounts of labeled data to augment unlabeled data sets. Essentially,
                    the labeled data acts to give a running start to the system and can considerably improve learning speed and accuracy.
                    A semi-supervised learning algorithm instructs the machine to analyze the labeled data for correlative properties that could be applied to the unlabeled data.
                </p>
                <p>
                    As explored in depth in this MIT Press research paper, there are, however, risks associated with this model,
                    where flaws in the labeled data get learned and replicated by the system.
                    Companies that most successfully use semi-supervised learning ensure that best practice protocols are in place.
                    Semi-supervised learning is used in speech and linguistic analysis,
                    complex medical research such as protein categorization, and high-level fraud detection.
                </p>
            </div>

            <h2 className="mainSubTitleH">What is reinforcement learning?</h2>
            <div className="ANIContainer">
                <p>
                    Reinforcement learning is the fourth machine learning model.
                    In supervised learning, the machine is given the answer key and learns by finding correlations among all the correct outcomes.
                    The reinforcement learning model does not include an answer key but,
                    rather, inputs a set of allowable actions, rules, and potential end states.
                    When the desired goal of the algorithm is fixed or binary, machines can learn by example.
                    But in cases where the desired outcome is mutable, the system must learn by experience and reward.
                    In reinforcement learning models, the “reward” is numerical and is programmed into the algorithm as something the system seeks to collect.
                </p>
                <p>
                    In many ways, this model is analogous to teaching someone how to play chess. Certainly,
                    it would be impossible to try to show them every potential move. Instead,
                    you explain the rules and they build up their skill through practice.
                    Rewards come in the form of not only winning the game,
                    but also acquiring the opponent’s pieces. Applications of reinforcement learning include automated price bidding for buyers of online advertising,
                    computer game development, and high-stakes stock market trading.
                </p>
            </div>




        </div>
    );
}

export default WhatIsML;