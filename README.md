# 🌟 Soulstar - Find Peace and Purpose with Personalized Spiritual Guidance

## 🌌 Overview  
Soulstar is a user-centric platform designed to make spiritual exploration accessible and personalized. Through the powerful combination of astrology and numerology, Soulstar generates insights tailored to your unique birth details.  

Whether you’re a beginner seeking clarity, an intermediate user building deeper connections, or an advanced spiritual seeker, Soulstar adapts to your understanding level. This unique approach ensures that everyone can understand their astrological insights and connect with the product more deeply, making Soulstar truly one of a kind.  

---
## 📸 UI Reference:
  ![HomePage](https://github.com/user-attachments/assets/b5f77fc4-3d48-405e-bbec-2e82560eab45)

  ![ChatBot](https://github.com/user-attachments/assets/4a465d38-39b8-48a4-88c7-7d2c7dc5e3f1)

## 🌐 Live Deployment
🔗 [SoulStar Live Deployment](https://soulstar.dvjshx.club/)

## 🎥 Demo Video
🔗 [SoulStar Demo Video](https://youtu.be/KW_TlrqHJkI)

## ✨ Features  


### 💬 1. Intuitive Chatbot  
- 🤖 A 24/7 AI-driven chatbot designed to understand your emotions and provide personalized spiritual guidance.  
- 🧠 Utilizes advanced emotional analysis to interpret your feelings and suggest tailored prompts and insights.  
- 🗣️ Engages in empathetic conversations, ensuring you feel heard and supported throughout your spiritual journey. 

### 🪷 2. Kundli & Horoscope Generation  
- 🗺️ Comprehensive birth chart (Kundali) analysis, detailing all 12 houses.  
- 🔮 Insights into key life areas such as career, relationships, personal growth, family, and social connections.  
- 📅 Daily and monthly horoscopes tailored to your astrological profile.  

### 🤖 3. AI-Powered Recommendations  
- 💎 Gemstone Suggestions: Personalized recommendations based on your birth chart to enhance your spiritual journey.  
- 🙏 Ritual Guidance:Pooja recommendations with in-depth insights on their purpose, benefits, and step-by-step instructions.  
- 🧘 Advice tailored specifically to your astrological needs and insights.  

### 🌿 4. Holistic Spiritual Content  
- 🧘‍♂️ Meditation Practices: Suggestions aligned with your horoscope to enhance mindfulness and well-being.  
- 🏋️ Workout Routines: Activities curated to resonate with your spiritual and physical energy.  
- 🌙 Sleep Content: Personalized audio and visual content to support spiritual wellness.   

  ## 🧑‍💻 Technologies Used

- 🤖 **Hugging Face Embedding Models:** For data embedding and analysis.
- 📦 **DataStax Astra DB:** For efficient vector storage and data retrieval.
- 🧠 **Llama 3.1-8b-instant & Langflow:** To build modular and scalable query pipelines.
- 🐍 **Flask:** For backend API management and data flow handling.
- ⚡ **Next.js:** For dynamic and responsive frontend development.
- 🎨 **Tailwind CSS:** Styled for a modern, mobile-friendly experience.

## 🛠️ How It Works  

### 📝 Input Details  
To receive your personalized spiritual guidance, provide:  
- **Name**  
- **Date of Birth**  
- **Time of Birth**  
- **Place of Birth**  

---


## 🛠️ Installation

### ⚡ Prerequisites
- ✅ Node.js, Flask installed.
- ✅ Access to **DataStax Astra DB**.

### 🖥️ Backend Setup (Flask)

```bash
git clone https://github.com/dvjsharma/SoulStar.git
cd SoulStar
python -m venv venv
source venv/bin/activate  # For Windows use: venv\Scripts\activate
pip install -r requirements.txt
python server.py
```

### 🌐 Frontend Setup (Next.js)

```bash
cd src
npm install --legacy-peer-deps 
npm run dev
```

### 📦 Environment Variables
Create a `.env` file in the **root directory** with the following keys:

```plaintext
BASE_API_URL=<your_base_api_url>
LANGFLOW_ID=<your_langflow_id>
FLOW_ID=<your_flow_id>
APPLICATION_TOKEN=<your_application_token>
ENDPOINT=<your_endpoint>
DEBUG=<your_debug>
HOST=<your_host>

## 👨‍👩‍👧‍👦 Team

- [**Divij Sharma**](https://www.linkedin.com/in/dvjsharma)
- [**Gaurangi Bansal**](https://www.linkedin.com/in/gaurangi-bansal/)
- [**Samriddhi Sharma**](https://www.linkedin.com/in/samriddhi-sharma-b07b81254/)
- [**Akash Kumar Sah**](https://www.linkedin.com/in/akashsah2003)

PORT=<your_port>
```



