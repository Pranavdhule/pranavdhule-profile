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
    demo: "",
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
    slug: "student-performance-prediction",
    title: "Student Performance Prediction System",
    tagline: "Machine learning for early academic insight",
    description:
      "A machine learning application that predicts student performance using relevant academic and demographic features.",
    problem:
      "Academic risk is often noticed too late, when there is little time left to support the student.",
    solution:
      "A supervised learning pipeline processes academic and demographic features and serves predictions through a simple Flask web interface.",
    features: [
      "Data preprocessing",
      "Feature analysis",
      "ML model training",
      "Prediction",
      "Web interface",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "Machine Learning"],
    methodology: [
      "Clean the dataset and handle missing or inconsistent values.",
      "Explore feature relationships and encode categorical variables.",
      "Train and compare candidate models with cross-validation.",
      "Serialise the selected model and expose it through Flask.",
    ],
    results:
      "An end-to-end pipeline from raw data to a usable prediction interface. (Add your own accuracy metrics here.)",
    github: "",
    demo: "",
  },
  {
    slug: "event-registration-portal",
    title: "Event Registration Portal",
    tagline: "Django-based registration and administration system",
    description:
      "A web-based event registration system designed to manage event registrations and administrative operations.",
    problem:
      "Manual event sign-up through spreadsheets and messages makes tracking registrations and managing events difficult.",
    solution:
      "A Django application with relational data models, REST endpoints and an admin workflow for creating events and managing registrations.",
    features: [
      "Event registration",
      "Event management",
      "Registration management",
      "Admin operations",
      "Database integration",
    ],
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Django REST Framework", "MySQL"],
    methodology: [
      "Model events, participants and registrations in a relational schema.",
      "Build registration views with server-side validation.",
      "Expose REST endpoints with Django REST Framework.",
      "Provide admin operations for event and registration management.",
    ],
    results:
      "Centralised registration data with an admin workflow replacing manual tracking.",
    github: "",
    demo: "",
  },
];