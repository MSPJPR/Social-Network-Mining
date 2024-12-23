// Existing functionality for network visualization
const nodes = new vis.DataSet([
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
]);

const edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
]);

const container = document.getElementById('network-container');
const data = { nodes: nodes, edges: edges };
const options = {
    nodes: {
        shape: 'dot',
        size: 15
    },
    edges: {
        width: 2
    }
};

const network = new vis.Network(container, data, options);

// New functionality for Community Detection (Placeholder for functionality)
const communityData = {
    nodes: new vis.DataSet([
        { id: 1, label: 'Community 1' },
        { id: 2, label: 'Community 1' },
        { id: 3, label: 'Community 2' },
        { id: 4, label: 'Community 2' },
    ]),
    edges: new vis.DataSet([
        { from: 1, to: 2 },
        { from: 3, to: 4 },
    ])
};

const communityContainer = document.getElementById('community-container');
const communityNetwork = new vis.Network(communityContainer, communityData, options);

// Sentiment Analysis Feature
document.getElementById('analyze-btn').addEventListener('click', function() {
    const text = document.getElementById('sentiment-input').value;
    if (text === "") {
        document.getElementById('sentiment-output').innerText = "Please enter some text.";
        return;
    }

    const sentiment = analyzeSentiment(text);  // Placeholder function for sentiment analysis
    document.getElementById('sentiment-output').innerText = "Sentiment: " + sentiment;
});

// Placeholder sentiment analysis function
function analyzeSentiment(text) {
    // This can be replaced with an actual sentiment analysis logic or API call
    if (text.toLowerCase().includes('good') || text.toLowerCase().includes('happy')) {
        return "Positive";
    } else if (text.toLowerCase().includes('bad') || text.toLowerCase().includes('sad')) {
        return "Negative";
    } else {
        return "Neutral";
    }
}
