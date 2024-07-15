<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Location-Based Clothing Recommendation System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            background-color: #f4f4f4;
        }

        h1, h2, h3 {
            color: #333;
        }

        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        pre, code {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul li {
            padding: 5px 0;
        }

        ul li::before {
            content: "•";
            color: #333;
            font-weight: bold;
            display: inline-block; 
            width: 1em;
            margin-left: -1em;
        }

        .highlight {
            background-color: #ffeeba;
            padding: 2px 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Location-Based Clothing Recommendation System</h1>

        <h2>Project Description</h2>
        <p>This project is a recommendation platform that suggests clothes based on the user's location and upcoming festivals. It leverages user location data to provide tailored fashion recommendations that align with regional preferences and cultural events. Additionally, the project includes <span class="highlight">MynStyle</span>, a ChatGPT-like feature that assists users with fashion-related queries using Botpress.</p>

        <h2>Key Features</h2>
        <ul>
            <li><span class="highlight">Location-Based Recommendations:</span> Suggests clothing items based on the user's geographic location.</li>
            <li><span class="highlight">Festival-Based Recommendations:</span> Recommends outfits for upcoming local festivals.</li>
            <li><span class="highlight">Personalized Suggestions:</span> Tailors recommendations based on user preferences and past behavior.</li>
            <li><span class="highlight">Interactive Interface:</span> Allows users to interact with the recommended items, view details, and make purchases.</li>
            <li><span class="highlight">MynStyle:</span> A chatbot feature powered by Botpress that answers all fashion-related queries.</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
            <li>Frontend: ReactJS, Material-UI</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: MongoDB</li>
            <li>APIs: Geolocation API, Fashion Data API</li>
            <li>Bot: Botpress for MynStyle</li>
            <li>Others: Git, GitHub, Vercel for deployment</li>
        </ul>

        <h2>Installation Instructions</h2>
        <ol>
            <li><strong>Clone the repository:</strong>
                <pre><code>git clone https://github.com/your-username/your-repo-name.git</code></pre>
            </li>
            <li><strong>Navigate to the project directory:</strong>
                <pre><code>cd your-repo-name</code></pre>
            </li>
            <li><strong>Install frontend dependencies:</strong>
                <pre><code>cd frontend
npm install</code></pre>
            </li>
            <li><strong>Install backend dependencies:</strong>
                <pre><code>cd ../backend
npm install</code></pre>
            </li>
            <li><strong>Set up environment variables:</strong> Create a <code>.env</code> file in the backend directory with the necessary API keys and configuration.</li>
            <li><strong>Run the development server:</strong>
                <ul>
                    <li><strong>Start the backend server:</strong>
                        <pre><code>npm start</code></pre>
                    </li>
                    <li><strong>Start the frontend development server:</strong>
                        <pre><code>cd ../frontend
npm start</code></pre>
                    </li>
                </ul>
            </li>
        </ol>

        <h2>How to Use the Project</h2>
        <ol>
            <li><strong>Open the application:</strong> Navigate to <a href="http://localhost:3000">http://localhost:3000</a> in your web browser.</li>
            <li><strong>Register/Login:</strong> Create an account or log in if you already have one.</li>
            <li><strong>Allow location access:</strong> Grant the application permission to access your location.</li>
            <li><strong>View recommendations:</strong> Browse the clothing recommendations tailored to your location and upcoming festivals.</li>
            <li><strong>Interact with recommendations:</strong> Click on items to view details, save to wishlist, or make a purchase.</li>
            <li><strong>Use MynStyle:</strong> Ask fashion-related queries in the chatbot interface to get instant assistance.</li>
        </ol>

        <h2>Workflow</h2>
        <h3>Example Workflow</h3>
        <ol>
            <li><strong>User Registration:</strong
