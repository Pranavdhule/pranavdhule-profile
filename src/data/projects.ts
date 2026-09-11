export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  methodology: string[];
  results: string;
  notes?: string[];
  /** TODO: add your repository URL here. Leave empty to render a disabled button. */
  github: string;
  /** TODO: add your live demo URL here. Leave empty to render a disabled button. */
  demo: string;
};

export const projects: Project[] = [
  {
    slug: "amsa",
    title: "Automated Market Strategy Adviser (AMSA)",
    tagline: "AI-driven market recommendation for farmers and traders",
    description:
      "An AI-driven market recommendation system that helps farmers and traders identify the most profitable market for selling goods by considering market prices, quantity, transportation cost, and distance.",
    problem:
      "Farmers and traders often choose a market based on price alone, ignoring transport distance and cost, which can turn a high headline price into a lower net return.",
    solution:
      "The system combines market price data, quantity, routing distance and transport cost into a single net-revenue comparison, then ranks candidate markets and predicts price trends with machine learning models.",
    features: [
      "Market price analysis",
      "Market recommendation",
      "Distance calculation",
      "Transportation cost calculation",
      "Net revenue calculation",
      "Comparative market analysis",
      "Machine learning prediction",
      "Data visualization",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "XGBoost",
      "LSTM",
      "OpenRouteService / OSRM",
      "QGIS",
      "Streamlit",
    ],
    methodology: [
      "Collect and clean market price data, then engineer features for modelling.",
      "Compute route distance between the seller location and each candidate market.",
      "Estimate transport cost and derive net revenue per market.",
      "Train Random Forest / XGBoost models for price estimation and LSTM for trend behaviour.",
      "Rank markets and present the comparison in a Streamlit interface with charts and maps.",
    ],
    notes: [
      "Transport Cost = Distance × Quantity × Cost per km per tonne",
      "Net Revenue = Selling Revenue − Transport Cost",
    ],
    results:
      "Produces a ranked, explainable market comparison based on net revenue rather than headline price. (Add your own measured results here.)",
    github: "",
    demo: "https://automated-market-strategy-adviser.streamlit.app/",
  },
  {
    slug: "ai-pdf-chatbot",
    title: "AI PDF Chatbot",
    tagline: "Chat with your documents using retrieval-augmented generation",
    description:
      "An AI-powered document question-answering application that allows users to upload PDF documents and interact with their content using natural language.",
    problem:
      "Finding a specific answer inside long PDF documents means manual scanning, which is slow and error prone.",
    solution:
      "Uploaded PDFs are parsed, chunked and embedded into a vector store, so a user question retrieves the most relevant passages and the language model answers grounded in that context.",
    features: [
      "PDF upload",
      "Text extraction",
      "Document chunking",
      "Embeddings",
      "Vector search",
      "Question answering",
      "Conversational interface",
    ],
    tech: ["Python", "LangChain", "FAISS", "Vector Database", "Embeddings", "Streamlit", "OpenAI API"],
    methodology: [
      "Extract raw text from uploaded PDF files.",
      "Split text into overlapping chunks suitable for retrieval.",
      "Generate embeddings and index them in FAISS.",
      "Retrieve top-matching chunks for each user question.",
      "Compose an answer with the language model and keep conversational context.",
    ],
    results:
      "Delivers grounded answers with a conversational interface over user-supplied documents. (Add your own evaluation notes here.)",
    github: "",
    demo: "",
  },
  {
    slug: "biological-age-prediction",
    title: "Biological Age Prediction",
    tagline: "Estimating biological age from health and lifestyle biomarkers",
    description:
      "A machine learning system that estimates a person's biological age from clinical and lifestyle biomarkers, highlighting the gap between biological and chronological age as a health indicator.",
    problem:
      "Chronological age alone is a weak indicator of health status, so two people of the same age can carry very different levels of physiological risk.",
    solution:
      "A regression pipeline learns the relationship between biomarker profiles and age, then reports predicted biological age along with the drivers behind each prediction.",
    features: [
      "Biomarker data preprocessing",
      "Feature engineering and selection",
      "Regression model training",
      "Biological vs chronological age gap",
      "Feature importance explanation",
      "Result visualization",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib"],
    methodology: [
      "Clean the biomarker dataset and handle missing or outlier values.",
      "Engineer and scale features, then select the most predictive biomarkers.",
      "Train and compare regression models using cross-validation (MAE / RMSE).",
      "Compute the biological-versus-chronological age gap per record.",
      "Explain predictions with feature importance and visualize the results.",
    ],
    results:
      "Produces an interpretable biological age estimate with per-feature contributions. (Add your own measured error metrics here.)",
    github: "",
    demo: "",
  },
  {
    slug: "flowcast",
    title: "FlowCast: AI-Powered Smart Traffic Flow Prediction Platform",
    tagline: "Predictive analytics for intelligent urban traffic management",
    description:
      "A machine learning platform that forecasts traffic flow using historical and real-time data, helping city planners and commuters make smarter, data-driven mobility decisions.",
    problem:
      "Urban traffic congestion leads to wasted fuel, lost productivity, and increased emissions, yet reactive signal timing and planning rarely anticipate demand before it spikes.",
    solution:
      "FlowCast ingests traffic sensor and temporal data, engineers predictive features, and trains regression models to forecast vehicle flow so operators can act before congestion forms.",
    features: [
      "Traffic flow forecasting",
      "Historical trend analysis",
      "Real-time prediction dashboard",
      "Feature engineering for temporal patterns",
      "Model comparison and evaluation",
      "Interactive visualizations",
      "Streamlit deployment",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit", "Matplotlib", "Seaborn"],
    methodology: [
      "Collect and preprocess traffic volume, time, and environmental data.",
      "Engineer temporal features such as hour, day-of-week, and rolling averages.",
      "Train and compare regression models to forecast short-term traffic flow.",
      "Evaluate predictions using MAE, RMSE, and R² metrics.",
      "Deploy the best model behind an interactive Streamlit interface.",
    ],
    results:
      "Provides actionable traffic-flow forecasts to support proactive urban mobility planning. (Add your own measured results here.)",
    github: "",
    demo: "https://flowcast-traffic-prediction-gfh2afrmshjrhxcsqv7auk.streamlit.app/",
  },
];