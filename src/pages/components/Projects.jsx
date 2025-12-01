import React, { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import "./css/Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "Potato Leaf Diseases Detection",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project1.png"),
      description:
        "An AI-powered computer vision system for detecting and classifying potato leaf diseases using deep learning techniques. The system achieves 99.8% accuracy in disease detection and provides real-time analysis for farmers.",
      longDescription:
        "This project addresses a critical agricultural challenge by developing an intelligent system that can identify various potato leaf diseases with high accuracy. The system uses advanced computer vision techniques and deep learning models to analyze leaf images and provide instant disease diagnosis. This helps farmers take timely action to prevent crop loss and improve yield.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Flask",
        "NumPy",
        "Pandas",
      ],
      features: [
        "Real-time disease detection",
        "99.8% accuracy rate",
        "Mobile-friendly interface",
        "Batch processing capability",
        "Detailed disease reports",
        "Integration with farming apps",
      ],
      challenges: [
        "Handling diverse lighting conditions in field images",
        "Managing large datasets of leaf images",
        "Optimizing model performance for mobile deployment",
        "Ensuring accuracy across different disease types",
      ],
      solutions: [
        "Implemented advanced image preprocessing techniques",
        "Used data augmentation to improve model robustness",
        "Optimized model architecture for mobile deployment",
        "Created comprehensive training dataset with expert annotations",
      ],
      results: [
        "99.8% accuracy in disease detection",
        "Reduced diagnosis time from hours to seconds",
        "Successfully deployed on Hugging Face Spaces",
        "Positive feedback from agricultural community",
      ],
      liveUrl:
        "https://huggingface.co/spaces/itsluckysharma01/Potato_Diseases_Detection_with_Deep_Learning",
      githubUrl:
        "https://github.com/itsluckysharma01/Potato_Leaf_Diseases_Detection_with_Deep-Learning-Tenserflow.git",
      demoUrl:
        "https://huggingface.co/spaces/itsluckysharma01/Potato_Diseases_Detection_with_Deep_Learning",
      screenshots: [require("./images/projectimg/project1.png")],
      metrics: {
        accuracy: "99.8%",
        processingTime: "< 2 seconds",
        modelSize: "15MB",
        trainingEpochs: "50",
      },
    },

    {
      id: 2,
      title: "Full-Stack Authentication System",
      category: "web-dev",
      type: "Full-Stack",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project2.png"),
      description:
        "A complete full-stack authentication system with React frontend and Express backend, featuring secure user registration, login, password reset, and session management.",
      longDescription:
        "This comprehensive authentication system provides a secure and scalable solution for user management. Built with modern web technologies, it includes advanced security features like JWT tokens, password hashing, email verification, and role-based access control. The system is designed to handle high traffic and provides a seamless user experience.",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "JWT",
        "Bcrypt",
        "Nodemailer",
      ],
      features: [
        "User registration and login",
        "Email verification system",
        "Password reset functionality",
        "JWT-based authentication",
        "Role-based access control",
        "Session management",
        "Input validation and sanitization",
      ],
      challenges: [
        "Implementing secure password hashing",
        "Managing JWT token expiration",
        "Handling concurrent user sessions",
        "Ensuring data validation and security",
      ],
      solutions: [
        "Used bcrypt for secure password hashing",
        "Implemented refresh token mechanism",
        "Created session management system",
        "Added comprehensive input validation",
      ],
      results: [
        "100% secure authentication flow",
        "Successfully deployed on Vercel",
        "Handles 1000+ concurrent users",
        "Zero security vulnerabilities",
      ],
      liveUrl:
        "https://sign-up-form-lo8dkmb3l-lucky-sharmas-projects-d189830d.vercel.app/signup",
      githubUrl:
        "https://github.com/itsluckysharma01/House_Price_India-Regression_Model-ML.git",
      demoUrl:
        "https://sign-up-form-lo8dkmb3l-lucky-sharmas-projects-d189830d.vercel.app/signup",
      screenshots: [require("./images/projectimg/project2.png")],
      metrics: {
        users: "100+",
        responseTime: "< 200ms",
        uptime: "99.9%",
        securityScore: "A+",
      },
    },
    {
      id: 3,
      title: "Quick Sign - Digital Signature App",
      category: "web-dev",
      type: "Frontend",
      status: "Completed",
      year: "2024",
      image: require("./images/projectimg/project3.png"),
      description:
        "A web-based digital signature application built with HTML, CSS, and JavaScript that allows users to create, customize, and save digital signatures with various tools and options.",
      longDescription:
        "Quick Sign is an intuitive digital signature application that provides a comprehensive solution for creating and managing digital signatures. The application features a responsive design, multiple drawing tools, signature customization options, and the ability to save signatures in various formats. It's perfect for businesses and individuals who need to create professional digital signatures quickly and easily.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Canvas API",
        "Local Storage",
      ],
      features: [
        "Digital signature creation",
        "Multiple drawing tools (pen, brush, marker)",
        "Color and thickness customization",
        "Signature saving and loading",
        "Export to various formats",
        "Responsive design",
        "Touch support for mobile devices",
      ],
      challenges: [
        "Implementing smooth drawing on canvas",
        "Handling different input devices (mouse, touch)",
        "Managing signature data storage",
        "Creating intuitive user interface",
      ],
      solutions: [
        "Used HTML5 Canvas with optimized drawing algorithms",
        "Implemented touch and mouse event handling",
        "Created local storage system for signatures",
        "Designed user-friendly interface with clear controls",
      ],
      results: [
        "Smooth drawing experience across devices",
        "Successfully deployed on GitHub Pages",
        "Positive user feedback",
        "Mobile-responsive design",
      ],
      liveUrl: "https://itsluckysharma01.github.io/Project-Quick-Signature/",
      githubUrl:
        "https://github.com/itsluckysharma01/Project-Quick-Signature.git",
      demoUrl: "https://itsluckysharma01.github.io/Project-Quick-Signature/",
      screenshots: [require("./images/projectimg/project3.png")],
      metrics: {
        users: "500+",
        loadTime: "< 1 second",
        compatibility: "95%",
        userRating: "4.8/5",
      },
    },
    {
      id: 4,
      title: "Comprehensive Dataset Collection",
      category: "data-science",
      type: "Data Science",
      status: "Ongoing",
      year: "2024",
      image: require("./images/projectimg/project4.png"),
      description:
        "A comprehensive collection of 15+ datasets spanning various domains including healthcare, entertainment, transportation, demographics, and more. All datasets are cleaned, processed, and ready for analysis.",
      longDescription:
        "This project involves curating, cleaning, and organizing datasets from various domains to create a comprehensive data repository. Each dataset is carefully processed to ensure quality, consistency, and usability. The collection includes datasets for machine learning, statistical analysis, and research purposes, making it valuable for data scientists, researchers, and students.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Jupyter",
        "SQL",
        "CSV",
        "JSON",
      ],
      features: [
        "15+ diverse datasets",
        "Data cleaning and preprocessing",
        "Multiple data formats (CSV, JSON, SQL)",
        "Comprehensive documentation",
        "Data quality validation",
        "Easy integration with analysis tools",
        "Regular updates and maintenance",
      ],
      challenges: [
        "Ensuring data quality and consistency",
        "Handling different data formats",
        "Creating comprehensive documentation",
        "Maintaining dataset updates",
      ],
      solutions: [
        "Implemented automated data validation",
        "Created standardized processing pipeline",
        "Developed detailed documentation system",
        "Established regular update schedule",
      ],
      results: [
        "15+ high-quality datasets",
        "Used by 100+ data scientists",
        "Regular contributions from community",
        "Open source and freely available",
      ],
      liveUrl: "https://github.com/itsluckysharma01/Datasets.git",
      githubUrl: "https://github.com/itsluckysharma01/Datasets.git",
      demoUrl: "https://github.com/itsluckysharma01/Datasets.git",
      screenshots: [require("./images/projectimg/project4.png")],
      metrics: {
        users: "100+",
        loadTime: "< 1 second",
        compatibility: "95%",
        userRating: "4.8/5",
      },
    },
    {
      id: 5,
      title: "QR-Code Generator",
      category: "web-dev",
      type: "Frontend",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project5.png"),
      description:
        "A QR Code Generator built with HTML, CSS, and JavaScript is a web application that allows users to input data (like a URL, text, or contact information) and instantly generate a scannable Quick Response (QR) code image.",
      longDescription:
        "A QR Code Generator built with HTML, CSS, and JavaScript is a fast, client-side web tool. It uses HTML for the input structure and output display, and CSS for styling the user interface. The core functionality relies on JavaScript, which uses a dedicated library to encode the users data (like a URL or text) into a scannable QR code image displayed instantly on the page.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Instant QR code generation",
        "User-friendly interface",
        "Customizable QR code design",
        "Comprehensive documentation",
        "Easy integration with analysis tools",
        "Regular updates and maintenance",
      ],
      challenges: [
        "Ensuring reliable image output across browsers",
        "Handling different data formats",
        "Providing intuitive customization and download features",
      ],
      solutions: [
        "Implemented automated data validation",
        "Created a modular input system",
        "Developed a user-friendly options panel",
      ],
      results: [
        "QR image format like PNG or SVG",
        "encoded version of the original user input",
        "Open source and freely available",
      ],
      liveUrl: "https://itsluckysharma01.github.io/QR-Code-Generator/",
      githubUrl: "https://github.com/itsluckysharma01/QR-Code-Generator.git",
      demoUrl: "https://itsluckysharma01.github.io/QR-Code-Generator/",
      screenshots: [require("./images/projectimg/project5.png")],
      metrics: {
        datasets: "15+",
        downloads: "1000+",
        contributors: "5+",
        stars: "50+",
      },
    },
    {
      id: 6,
      title: "House Price Prediction using Machine Learning",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project6.png"),
      description:
        "House Price Prediction is a machine learning problem that involves estimating the selling price of a residential property based on various factors (features) using statistical models. It falls under the category of regression analysis because the target variable (price) is a continuous value.",
      longDescription:
        "A House Price Prediction system uses machine learning (ML), primarily regression algorithms like Random Forest or XGBoost, to estimate a property's monetary value. The model learns from historical data, analyzing dozens of complex features—such as square footage, location, and local economic indicators—to forecast the final sale price, providing crucial insights for buyers, sellers, and investors.",
      technologies: [
        "Python",
        "Matplotlib",
        "Regression Algorithms",
        "Flask",
        "NumPy",
        "Pandas",
      ],
      features: [
        "Continuous Value Prediction",
        "99.8% accuracy rate",
        "Mobile-friendly interface",
        "Performance Evaluation Metrics",
        "Feature Engineering",
      ],
      challenges: [
        "Data Heterogeneity and Quality",
        "Feature Engineering Complexity",
        "Optimizing model performance for mobile deployment",
        "Market Dynamics and External Factors",
      ],
      solutions: [
        "Automated Data Validation & Imputation",
        "Standardized Feature Processing Pipelines",
        "Regularization and Ensemble Techniques",
        "Integration of Time-Series and Macroeconomic Indicators",
      ],
      results: [
        "99.8% accuracy in disease detection",
        "Estimated Sale Price",
        "Successfully deployed",
        "Feature Importance",
      ],
      liveUrl: "https://house-price-india-regression-model-ml.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/House_Price_India-Regression_Model-ML..git",
      demoUrl: "https://house-price-india-regression-model-ml.onrender.com/",
      screenshots: [require("./images/projectimg/project6.png")],
      metrics: {
        accuracy: "98%",
        processingTime: "< 2 seconds",
      },
    },
    {
      id: 7,
      title: "Diabetes Risk Predictor - AI-Powered Health Assessment",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project7.png"),
      description:
        "Diabetes Risk Prediction is a machine learning problem that involves estimating the probability of an individual having or developing diabetes based on various biomedical and lifestyle factors (features) using statistical models. It typically falls under the category of classification analysis because the target variable (risk) is a discrete, categorical value (e.g., 'Positive' or 'Negative').",
      longDescription:
        "Developed a machine learning model to predict an individual's risk of developing diabetes based on clinical and lifestyle factors (e.g., glucose, BMI, age). Utilized the Pima Indians Diabetes Dataset and employed algorithms like Logistic Regression and Random Forest; achieved an accuracy of [Insert Specific Accuracy Score, e.g., 85%] after extensive data cleaning, feature scaling, and hyperparameter tuning.",
      technologies: [
        "Python",
        "Matplotlib",
        "Regression Algorithms",
        "Flask",
        "NumPy",
        "Pandas",
      ],
      features: [
        "Continuous Diabetes Risk Prediction",
        "95.72% accuracy rate",
        "Mobile-friendly interface",
        "Performance Evaluation Metrics",
        "Feature Engineering",
      ],
      challenges: [
        "Data Heterogeneity and Quality",
        "Feature Engineering Complexity",
        "Optimizing model performance for mobile deployment",
        "Market Dynamics and External Factors",
      ],
      solutions: [
        "Automated Data Validation & Imputation",
        "Standardized Feature Processing Pipelines",
        "Regularization and Ensemble Techniques",
        "Integration of Time-Series and Macroeconomic Indicators",
      ],
      results: [
        "95.87% accuracy in disease detection",
        "Diabetes risk prediction",
        "Successfully deployed",
        "Feature Importance",
      ],
      liveUrl: "https://predicting-diabetes-with-logistic.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/Predicting_Diabetes_with_Logistic_Regression-ML.git",
      demoUrl: "https://predicting-diabetes-with-logistic.onrender.com/",
      screenshots: [require("./images/projectimg/project7.png")],
      metrics: {
        accuracy: "96%",
        processingTime: "< 2 seconds",
      },
    },
    {
      id: 8,
      title: "Loan Approval Prediction using Decision Trees and Random Forests",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project8.png"),
      description:
        "Loan Approval Prediction is a machine learning project that uses Decision Trees and Random Forests to determine the likelihood of a loan applicant being approved. By analyzing financial and personal features (e.g., credit score, income, employment history), the models classify applicants into a discrete 'Approved' or 'Denied' category, thereby automating and improving the risk assessment process.",
      longDescription:
        "The Loan Approval Prediction project is a supervised machine learning application designed to automate and enhance the credit risk assessment process for financial institutions. It addresses a classification problem where the primary goal is to predict whether a prospective borrower should be approved or denied for a loan based on their demographic, financial, and credit-related features. The project leverages Decision Trees and Random Forests, which are powerful algorithms known for their interpretability and robustness in handling complex datasets with non-linear relationships and interactions among features.",
      technologies: [
        "Python",
        "Matplotlib",
        "Regression Algorithms",
        "Flask",
        "NumPy",
        "Pandas",
      ],
      features: [
        "Continuous Loan Approval Prediction",
        "99% accuracy rate",
        "Mobile-friendly interface",
        "Performance Evaluation Metrics",
        "Feature Engineering",
      ],
      challenges: [
        "Data Heterogeneity and Quality",
        "Feature Engineering Complexity",
        "Optimizing model performance for mobile deployment",
        "Market Dynamics and External Factors",
      ],
      solutions: [
        "Automated Data Validation & Imputation",
        "Standardized Feature Processing Pipelines",
        "Regularization and Ensemble Techniques",
        "Integration of Time-Series and Macroeconomic Indicators",
      ],
      results: [
        "99% accuracy in loan approval prediction",
        "AI-Powered Loan Approval Prediction",
        "Successfully deployed",
        "Feature Importance",
      ],
      liveUrl: "https://loan-approval-prediction-decision-tree.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/Loan_Approval_Prediction-Decision_Tree_and_Random_Forest.git",
      demoUrl: "https://loan-approval-prediction-decision-tree.onrender.com/",
      screenshots: [require("./images/projectimg/project8.png")],
      metrics: {
        accuracy: "99%",
        processingTime: "< 2 seconds",
      },
    },
    {
      id: 9,
      title: "Heart Disease Prediction Algorithm Comparison (SVM vs KNN)",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project9.png"),

      description:
        "A Machine Learning system designed to predict the likelihood of heart disease using supervised learning algorithms. This project compares the performance of SVM and KNN to determine the best model for clinical prediction.",

      longDescription:
        "The Heart Disease Prediction system evaluates patient health data such as age, cholesterol levels, blood pressure, chest pain type, and ECG results to classify whether a person has a high risk of heart disease. Two machine learning algorithms—Support Vector Machine (SVM) and K-Nearest Neighbors (KNN)—are trained and compared to analyze their accuracy, precision, recall, and F1-score. This comparison helps identify the best algorithm for medical risk detection scenarios.",

      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Machine Learning Algorithms (SVM, KNN)",
      ],

      features: [
        "Binary classification of heart disease",
        "Side-by-side algorithm comparison (SVM vs KNN)",
        "Interactive performance visualization",
        "High accuracy and fast predictions",
        "Data preprocessing & feature scaling",
      ],

      challenges: [
        "Imbalanced dataset issues",
        "Selecting optimal hyperparameters for SVM & KNN",
        "Noise and missing medical records",
        "Ensuring generalization across patient demographics",
      ],
      solutions: [
        "Applied SMOTE and resampling techniques",
        "Performed parameter tuning using GridSearchCV",
        "Standardized feature scaling for consistent results",
        "Used cross-validation for robust performance evaluation",
      ],

      results: [
        "SVM achieved 93% accuracy",
        "KNN achieved 88% accuracy",
        "SVM selected as the best-performing model",
        "ROC curves & confusion matrices included in evaluation",
      ],

      liveUrl: "https://heart-disease-prediction-algorithm.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/Heart_Disease_Prediction-Algorithm_Comparison-SVM-KNN.git",
      demoUrl: "https://heart-disease-prediction-algorithm.onrender.com/",

      screenshots: [require("./images/projectimg/project9.png")],

      metrics: {
        svm_accuracy: "93%",
        knn_accuracy: "88%",
        processingTime: "< 1 second",
      },
    },
    {
      id: 10,
      title: "Movie Recommendation System using Unsupervised Learning (DBSCAN)",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project10.png"),

      description:
        "An intelligent movie recommendation system with an interactive web interface that uses unsupervised machine learning and DBSCAN clustering to group movies and recommend similar ones.",

      longDescription:
        "This Movie Recommendation System leverages unsupervised machine learning to recommend movies based on similarity patterns. Using DBSCAN clustering, the system analyzes factors such as genre, keywords, cast, rating, and user interaction metadata to automatically detect natural clusters of related movies—without requiring labeled data. Users can search for a movie, and the system suggests similar titles from the cluster. The project includes a modern web interface for smooth navigation and easy interaction.",

      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "DBSCAN Clustering",
        "Flask",
        "Matplotlib",
        "HTML/CSS",
      ],

      features: [
        "Unsupervised recommendation engine",
        "DBSCAN-based movie clustering",
        "Interactive and responsive web interface",
        "Search-based movie suggestions",
        "Visual cluster representation",
        "Automatic outlier (noise) movie detection",
      ],
      challenges: [
        "High dimensionality of movie datasets",
        "Handling sparse text-based features",
        "Tuning DBSCAN parameters (eps, min_samples)",
        "Improving cluster purity for better recommendations",
      ],

      solutions: [
        "Used TF-IDF vectorization for movie metadata",
        "Applied dimensionality reduction with PCA",
        "Performed parameter optimization for DBSCAN",
        "Filtered noise points to improve recommendation quality",
      ],
      results: [
        "Successfully generated movie clusters using DBSCAN",
        "High-quality movie suggestions with unsupervised learning",
        "Interactive search that returns relevant recommendations",
        "Visualization of clusters for analysis and debugging",
      ],
      liveUrl: "https://movie-recomendation-using-unsupervised.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/Movie_Recomendation_Using_Unsupervised_Learning.git",
      demoUrl: "https://movie-recomendation-using-unsupervised.onrender.com/",

      screenshots: [require("./images/projectimg/project10.png")],

      metrics: {
        clustersGenerated: 12,
        noisePoints: "5%",
        responseTime: "< 1 second",
      },
    },
    {
      id: 11,
      title: "Vehicle Part Failure Association using Unsupervised Learning",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project11.png"),

      description:
        "An unsupervised machine learning system that identifies hidden associations between failing vehicle parts using clustering and association rule mining to improve maintenance efficiency.",

      longDescription:
        "This project analyzes vehicle repair and maintenance logs to identify patterns in part failures. Using unsupervised learning techniques such as Apriori-based association rule mining and clustering algorithms, the system uncovers which parts commonly fail together, recurring fault combinations, and potential root-cause failure chains. These insights help automotive service centers, manufacturers, and diagnostic tools to prioritize inspections, plan preventive maintenance, and reduce breakdown rates. The project also includes an interactive interface for visualizing part associations, cluster groups, and failure networks.",

      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Apriori Algorithm",
        "Association Rule Mining",
        "Clustering (K-Means / DBSCAN)",
        "Matplotlib",
        "Seaborn",
      ],

      features: [
        "Unsupervised pattern discovery",
        "Association rule generation (support, confidence, lift)",
        "Failure cluster grouping",
        "Interactive data visualizations",
        "Root-cause association mapping",
        "Noise detection & anomaly identification",
      ],

      challenges: [
        "Sparse and inconsistent failure log data",
        "High dimensionality of part-frequency matrices",
        "Choosing appropriate clustering parameters",
        "Interpreting complex association rules",
      ],

      solutions: [
        "Cleaned and transformed failure logs using one-hot encoding",
        "Used Apriori for extracting strong associations",
        "Applied clustering for grouping related failure sets",
        "Visualized rule strength using scatter and network graphs",
      ],

      results: [
        "Generated actionable associations between part failures",
        "Identified high-risk parts that frequently fail together",
        "Improved failure prediction and maintenance planning",
        "Cluster visualizations reveal clear failure patterns",
      ],

      liveUrl: "https://vehicle-part-failure-association.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/Vehicle_Part_Failure_Association-Unsupervised.git",
      demoUrl: "https://vehicle-part-failure-association.onrender.com/",

      screenshots: [require("./images/projectimg/project11.png")],

      metrics: {
        rulesGenerated: 42,
        strongestLift: "3.8",
        clustersDetected: 6,
        processingTime: "< 2 seconds",
      },
    },
    {
      id: 12,
      title: "Titanic Survival Predictor",
      category: "ai-ml",
      type: "Machine Learning",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project12.png"),

      description:
        "A machine learning–based classification system that predicts whether a passenger would survive the Titanic disaster using demographic and travel data.",

      longDescription:
        "The Titanic Survival Predictor is a supervised machine learning project built using classification algorithms to estimate the survival probability of passengers aboard the Titanic. The model analyzes key features such as age, gender, ticket class, fare, family size, embarkation port, and cabin information. Multiple machine learning models—including Logistic Regression, Random Forest, and KNN—are trained and evaluated to identify the most accurate predictor. The project includes feature engineering, data cleaning, and performance visualization with an intuitive prediction UI.",

      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Flask",
      ],

      features: [
        "Binary classification of passenger survival",
        "Multiple ML model comparison",
        "Clean and interactive prediction interface",
        "Feature engineering & missing value handling",
        "Data visualization of patterns and correlations",
      ],

      challenges: [
        "Handling missing age and cabin data",
        "Dealing with class imbalance in survival labels",
        "Selecting the best-performing algorithm",
        "Understanding feature correlations",
      ],

      solutions: [
        "Imputed missing values using mean/median strategy",
        "Used feature scaling and one-hot encoding",
        "Trained multiple models with GridSearchCV tuning",
        "Visualized correlations using heatmaps and distribution plots",
      ],

      results: [
        "Random Forest achieved the best accuracy of 90%",
        "Generated survival predictions with high precision",
        "Visualization dashboards reveal survival patterns",
        "Deployed with a simple web-based UI",
      ],

      liveUrl: "https://titanic-survival-predictor-smarted.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/Titanic_Survival_Predictor_SmartED.git",
      demoUrl: "https://titanic-survival-predictor-smarted.onrender.com/",

      screenshots: [require("./images/projectimg/project12.png")],

      metrics: {
        accuracy: "90%",
        processingTime: "< 1 second",
        modelUsed: "Random Forest Classifier",
      },
    },
    {
      id: 13,
      title: "Sales Forecasting for a Retail Chain",
      category: "ai-ml",
      type: "Machine Learning / Time Series",
      status: "Completed",
      year: "2025",
      image: require("./images/projectimg/project13.png"),

      description:
        "A machine learning and time-series forecasting system that predicts future retail sales using historical data, seasonality patterns, and advanced ML models.",

      longDescription:
        "Sales Forecasting for a Retail Chain is a predictive analytics project that uses machine learning and time-series forecasting methods to estimate future product sales. The system analyzes historical sales trends, seasonal fluctuations, promotional effects, and store-level patterns. Models such as ARIMA, Prophet, LSTM, and Random Forest Regression are evaluated to identify the best-performing forecasting technique. The project includes a dashboard-style web interface for visualizing trends, forecasts, and key insights—helping retail managers make data-driven business decisions.",

      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Statsmodels (ARIMA)",
        "Facebook Prophet",
        "LSTM (TensorFlow/Keras)",
        "Matplotlib",
        "Flask",
      ],

      features: [
        "Accurate multi-step sales forecasting",
        "Time-series trend and seasonality analysis",
        "Model comparison (ARIMA, Prophet, LSTM, Random Forest)",
        "Interactive visualization dashboard",
        "Store and product-level forecasting",
        "Anomaly and spike detection",
      ],

      challenges: [
        "Handling missing and inconsistent sales data",
        "Capturing seasonal and holiday effects",
        "High variability across store/product levels",
        "Selecting the most accurate forecasting model",
      ],

      solutions: [
        "Applied data cleaning and imputation techniques",
        "Used decomposition to analyze trend and seasonality",
        "Performed hyperparameter tuning for forecasting models",
        "Built a model comparison pipeline for accuracy evaluation",
      ],

      results: [
        "Achieved 92% forecasting accuracy using Prophet",
        "Generated weekly and monthly sales predictions",
        "Interactive plots displaying trends and future values",
        "Enabled better inventory and demand planning",
      ],

      liveUrl: "https://sales-forecasting-for-a-retail-chain.onrender.com/",
      githubUrl:
        "https://github.com/itsluckysharma01/Sales_Forecasting_for_a_Retail_Chain.git",
      demoUrl: "https://sales-forecasting-for-a-retail-chain.onrender.com/",

      screenshots: [require("./images/projectimg/project13.png")],

      metrics: {
        bestModel: "Prophet",
        accuracy: "92%",
        forecastRange: "Next 30-90 days",
        processingTime: "< 3 seconds",
      },
    },
    {
      id: 14,
      title: "Portfolio Website",
      category: "web-development",
      type: "Frontend Development",
      status: "Continued",
      year: "2025",
      image: require("./images/projectimg/project14.png"),

      description:
        "A modern React.js portfolio website showcasing my journey as a Developer and Analyst, featuring interactive UI, animations, and dynamic project components.",

      longDescription:
        "The Portfolio Website is a fully-responsive and modern web application built using React.js to highlight my skills, projects, certifications, and professional experience. Designed with smooth animations, reusable components, and a clean UI/UX layout, the portfolio presents my journey both as a Software Developer and an Analyst. The website includes dynamic project data rendering, a contact form, and an elegant section-based navigation system.",

      technologies: [
        "React.js",
        "JavaScript",
        "CSS3 / TailwindCSS",
        "HTML5",
        "Framer Motion",
        "GitHub Pages / Vercel",
      ],

      features: [
        "Fully responsive modern UI",
        "Dynamic project showcase with filtering",
        "Smooth animations using Framer Motion",
        "Downloadable resume section",
        "Interactive contact form",
        "Dark/Light theme support",
        "SEO optimized design",
      ],

      challenges: [
        "Ensuring responsiveness across different devices",
        "Creating reusable and maintainable components",
        "Optimizing animations for performance",
        "Rendering project data dynamically",
      ],

      solutions: [
        "Used TailwindCSS for consistent responsive design",
        "Implemented modular and reusable React components",
        "Used lazy loading & code splitting for performance",
        "Created a structured project data model for dynamic rendering",
      ],

      results: [
        "Successfully deployed live portfolio",
        "Improved professional visibility and branding",
        "Showcases all ML, AI, and Web Dev projects in one place",
        "Interactive and smooth user experience",
      ],

      liveUrl: "https://portfolio-website-pearl-zeta.vercel.app/",
      githubUrl: "https://github.com/itsluckysharma01/Portfolio_Website.git",
      demoUrl: "https://portfolio-website-pearl-zeta.vercel.app/",

      screenshots: [require("./images/projectimg/project14.png")],

      metrics: {
        pageSpeed: "95+ score",
        components: 25,
        loadTime: "< 1.5 seconds",
      },
    },
    {
      id: 15,
      title: "Skin Diseases Detection Using Deep Learning",
      category: "ai-ml",
      type: "Deep Learning",
      status: "Continued",
      year: "2025",
      image: require("./images/projectimg/project15.jpg"),

      description:
        "A deep learning–based image classification system for detecting 30 types of skin diseases using a large dataset of 15,000 dermatology images with labels in both English and Hindi.",

      longDescription:
        "The Skin Diseases Detection System is a deep learning project designed to identify various dermatological conditions from images. The dataset contains 34 unique skin disease classes with around 15,000 images, labeled in both English and Hindi. The system uses Convolutional Neural Networks (CNNs) and transfer learning models such as EfficientNet, ResNet50, and MobileNetV2 to accurately classify skin conditions. The project includes image preprocessing, augmentation, hyperparameter tuning, and model evaluation using accuracy, precision, recall, and confusion matrices. A user-friendly web interface enables uploading an image and receiving real-time predictions.",

      technologies: [
        "Python",
        "TensorFlow / Keras",
        "CNN (Convolutional Neural Networks)",
        "Transfer Learning (EfficientNet, ResNet50, MobileNetV2)",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Flask / FastAPI",
      ],

      features: [
        "Detection of 30 different skin diseases",
        "High-accuracy CNN and transfer learning models",
        "Real-time image upload & prediction interface",
        "Data augmentation & image preprocessing",
        "Confusion matrix and performance visualization",
      ],

      challenges: [
        "Large variation in image quality and lighting",
        "Class imbalance across 30 categories",
        "High computational requirement for training CNNs",
        "Ensuring generalization across different skin tones",
      ],

      solutions: [
        "Used advanced augmentation (rotation, zoom, flip)",
        "Applied class balancing techniques and weighted loss",
        "Leveraged pre-trained CNNs for faster and accurate training",
        "Performed hyperparameter tuning with learning rate scheduling",
      ],

      results: [
        "aim to achieve high accuracy using EfficientNet-B3",
        "aim to achieve Real-time prediction with < 1.5 seconds processing",
        "Visualization tools enabled better clinical interpretability",
      ],

      liveUrl: "#",
      githubUrl:
        "https://github.com/itsluckysharma01/Skin_Diseases_Detection_Using_Deep-Learning.git",
      demoUrl: "#",

      screenshots: [require("./images/projectimg/project15.jpg")],

      metrics: {
        bestModel: "-",
        accuracy: "-",
        classes: 30,
        datasetSize: "15,000 images",
        processingTime: "-",
      },
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: "🚀", count: projectsData.length },
    {
      id: "ai-ml",
      name: "AI/ML",
      icon: "🤖",
      count: projectsData.filter((project) => project.category === "ai-ml")
        .length,
    },
    {
      id: "web-dev",
      name: "Web Development",
      icon: "🌐",
      count: projectsData.filter((project) => project.category === "web-dev")
        .length,
    },
    {
      id: "data-science",
      name: "Data Science",
      icon: "📊",
      count: projectsData.filter(
        (project) => project.category === "data-science"
      ).length,
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: "📱",
      count: projectsData.filter((project) => project.category === "mobile")
        .length,
    },
    {
      id: "desktop",
      name: "Desktop",
      icon: "💻",
      count: projectsData.filter((project) => project.category === "desktop")
        .length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const searchFilteredProjects = filteredProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "ai-ml":
        return "#ff6b6b";
      case "web-dev":
        return "#4ecdc4";
      case "data-science":
        return "#45b7d1";
      case "mobile":
        return "#96ceb4";
      case "desktop":
        return "#feca57";
      default:
        return "#95a5a6";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#10b981";
      case "In Progress":
        return "#f59e0b";
      case "Ongoing":
        return "#3b82f6";
      case "Planned":
        return "#6b7280";
      default:
        return "#6b7280";
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="projects-container">
      <BackButton position="top-left" size="medium" />
      <div className="projects-content">
        {/* Header Section */}
        <div className="projects-header">
          <h1 className="projects-title">
            My <span className="gradient-text">Best Projects</span>
          </h1>
          <p className="projects-subtitle">
            A showcase of my most impactful projects, demonstrating expertise
            across AI/ML, web development, and data science domains.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="projects-stats">
          <div className="stat-card">
            <div className="stat-number">{projectsData.length}</div>
            <div className="stat-label">Total Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {new Set(projectsData.map((project) => project.category)).size}
            </div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {
                projectsData.filter((project) => project.status === "Completed")
                  .length
              }
            </div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {projectsData.reduce(
                (total, project) => total + project.technologies.length,
                0
              )}
            </div>
            <div className="stat-label">Technologies Used</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="projects-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="project-search-input"
            />
            <svg
              className="search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-button ${
                  activeFilter === category.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category.id)}
                style={{ "--category-color": getCategoryColor(category.id) }}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {searchFilteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
              style={{ "--category-color": getCategoryColor(project.category) }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="view-icon">👁️</span>
                    <span className="view-text">View Details</span>
                  </div>
                </div>
                <div
                  className="project-status"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {project.status}
                </div>
                <div className="project-year">{project.year}</div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-type">
                    <span className="type-icon">🔧</span>
                    <span className="type-text">{project.type}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="project-metrics">
                  {Object.entries(project.metrics)
                    .slice(0, 2)
                    .map(([key, value]) => (
                      <div key={key} className="metric">
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key}</span>
                      </div>
                    ))}
                </div>

                <div className="project-actions">
                  <button
                    className="action-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, "_blank");
                    }}
                  >
                    Live Demo
                  </button>
                  <button
                    className="action-btn secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="project-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <span>✕</span>
              </button>

              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-meta">
                  <span className="modal-type">{selectedProject.type}</span>
                  <span className="modal-year">{selectedProject.year}</span>
                  <span
                    className="modal-status"
                    style={{
                      backgroundColor: getStatusColor(selectedProject.status),
                    }}
                  >
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                </div>

                <div className="modal-details">
                  <div className="modal-description">
                    <h4>Project Overview</h4>
                    <p>{selectedProject.longDescription}</p>
                  </div>

                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-technologies">
                    <h4>Technologies Used</h4>
                    <div className="technologies-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-metrics">
                    <h4>Project Metrics</h4>
                    <div className="metrics-grid">
                      {Object.entries(selectedProject.metrics).map(
                        ([key, value]) => (
                          <div key={key} className="metric-item">
                            <span className="metric-value">{value}</span>
                            <span className="metric-label">{key}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <button
                      className="btn-primary"
                      onClick={() =>
                        window.open(selectedProject.liveUrl, "_blank")
                      }
                    >
                      View Live Demo
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() =>
                        window.open(selectedProject.githubUrl, "_blank")
                      }
                    >
                      View Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
