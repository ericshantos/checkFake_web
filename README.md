# FakeCheck Web  

*A simple and straightforward service to identify online fake news*  

## 📌 Overview  

FakeCheck Web is a front-end application developed to consume the fakeCheck_API, providing a user-friendly interface for verifying suspicious news. The platform analyzes news URLs and returns an assessment of their veracity, classifying them as "True" or "False" with a confidence indicator.  

**API Link**: [fakeCheck_API on GitHub](https://github.com/ericshantos/fakeCheck_API)  

## ✨ Key Features  

- **News Verification**: Enter a news URL and receive instant analysis  
- **Verification History**: Track all analyses performed during the session  
- **Technical Information**: View details about the AI model used  
- **Credits System**: Learn about the developers and technologies involved  
- **Responsive Interface**: Fully adaptable for desktop and mobile devices  

## 🛠️ Technologies Used  

### Frontend  
- **Next.js** (v15) - React framework for hybrid rendering  
- **React** (v19) - Main library for UI construction  
- **TypeScript** - Adds static typing to JavaScript  
- **Tailwind CSS** - Utility CSS framework for styling  
- **Axios** - HTTP client for API consumption  

### Development Tools  
- **ESLint** - Code standardization  
- **Prettier** - Automatic formatting  
- **Git** - Version control  

## 🏗️ Project Architecture  

The project follows an atomic structure organized into:  

```
app/
├── components/
│   ├── atoms/          # Basic components (Buttons, Texts, etc.)
│   ├── molecules/      # Composite components (Forms, Cards)
│   ├── organisms/      # Complex components (Complete sections)
│   └── templates/      # Page layouts
├── constants/          # Global constants and types
├── hooks/              # Custom hooks
├── types/              # TypeScript types
└── page.tsx            # Main page
```

### Main Components  

1. **CheckNews**: News verification form  
2. **Results**: Display of analysis results  
3. **History**: Listing of verification history  
4. **Info**: Technical details about the model  
5. **Credits**: Information about the project and developers  

## 🔌 API Integration  

The frontend consumes the following endpoints from fakeCheck_API:  

- `POST /check`: Submits URL for verification  
- `GET /info`: Retrieves technical information about the model  
- `GET /credits`: Gets project data  

Required environment variables:  

```env
NEXT_PUBLIC_ENDPOINT_CHECK=https://api.fakecheck.com/check
NEXT_PUBLIC_ENDPOINT_INFO=https://api.fakecheck.com/info
NEXT_PUBLIC_ENDPOINT_CREDITS=https://api.fakecheck.com/credits
```  

## 🚀 How to Run the Project  

### Prerequisites  

- Node.js (v18+)  
- npm or yarn  
- Access to the fakeCheck API (running)  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/fakeCheck-web.git
   cd fakeCheck-web
   ```  

2. Install dependencies:  
   ```bash
   npm install
   # or
   yarn install
   ```  

3. Configure environment variables:  
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configurations
   ```  

4. Start the development server:  
   ```bash
   npm run dev
   # or
   yarn dev
   ```  

5. Access in your browser:  
   ```
   http://localhost:3000
   ```  

## 📄 License  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  

## 🤝 Contribution  

Contributions are welcome! Follow these steps:  

1. Fork the project  
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

## 📧 Contact  

For more information, contact:  

- **Eric Santos** - [GitHub](https://github.com/ericshantos)  
- **Email**: ericshantos13@gmail.com  

---  

Developed with ❤️ by Eric Santos