import MDP from './markdownpage';

const carddeck = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# Gasoline Expenditure Tracking Application
---

This gas tracking application represents the first true "passion project" of my programming journey. It was developed during the 
COVID-19 pandemic, a time when I was frequently commuting between home, school, and work—resulting in rising fuel expenses, 
especially in Ontario, Canada. Initially, I tracked my fuel costs using a basic Excel spreadsheet. However, I quickly realized 
I could turn this need into an opportunity to practice my development skills. Determined to build something meaningful, I dove 
into documentation and tutorials and began developing a more scalable and interactive solution. Functionally, this project shares 
structural similarities with the [Auto Shop App](/content/autoshop), utilizing a centralized data table as the core of the interface. 
However, the nature of the data it manages is tailored specifically to fuel tracking. Due to the nature of this application, there are some
basic mathematical operations like calculating running totals (fuel, currency and points) and financial calculations. The database schema and
user interface were designed based on common items found in gas station receipts. 

**Key tracked data points included:**
- Station address  
- Fuel price  
- Amount of fuel purchased  
- Date of transaction  
- Petro-Canada points earned (when applicable)

On the backend, this was the first time I implemented full CRUD (Create, Read, Update, Delete) operations manually. The data was stored 
using Microsoft SQL Server (MSSQL), which integrated well with .NET development through Visual Studio 2022 via .mdf files and custom connection strings.
At the time, during Semester 3 of my program, this was a significant technical challenge. Testing each operation and ensuring stable database interactions 
was a great learning experience, and it marked a critical point in developing my confidence as a programmer. Overall, this project helped solidify my 
understanding of UI/UX, database design, and backend integration while also providing a genuinely useful tool for real-world fuel expense tracking.

### Sources
---
- **Source Code:** [GitHub Repository](https://github.com/RamiyanGangatharan/GasolineExpenditure.exe)
`;

export default function Article() {
  return <MDP title="Gasoline Expenditure Tracker" article={carddeck} />;
}
