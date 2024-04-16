<b>Inprocode</b>

Overview
The project aims to practice frontend state management using Context, implement graphical representations using Chart.js or similar libraries, and integrate multi-language support using i18n. The project focuses on creating user interfaces and leveraging third-party libraries efficiently.

Why Third-Party Libraries?
Integrating third-party libraries into projects offers several benefits:

* Efficiency and Speed: Ready-made solutions save time and effort, speeding up development.
* Quality and Reliability: Libraries maintained by experts are usually more reliable and robust than homemade solutions.
* Advanced Functionalities: Libraries provide functionalities that might be difficult to implement from scratch.

Level 1 Exercises
Exercise 1
Create the project base with necessary React components and define data in Redux or Context:

Expense balance
Today's expense
% variation between yesterday and today
Graphic data

Exercise 2
Display the total balance of expenses for the week and accompany each functionality with Jest tests.

Exercise 3
Utilize Chart.js, ApexCharts, or preferred library to show the weekly expense chart. Accompany functionalities with Jest tests.

Exercise 4
Show today's total expenses and % change from yesterday, accompanied by Jest tests.

Exercise 5
Implement multilingualism using the i18n library. Accompany each functionality with Jest tests.

Exercise 6
Upload the project to Vercel and ensure GitHub pipelines are functioning correctly for proper builds.

Level 2 Exercises
Exercise 7
Allow users to modify the displayed week using arrows next to the total balance. Ensure not to change the week if it's the current one. Expand the dataset to allow traversing older data within the current week.

Components:

*LanguageSelector
- Displays flags for different languages.
- Allows users to change the language on click.

*TotalBalance
- Shows the total balance of expenses for the week.
- Allows users to navigate through weeks using arrow buttons.

*GraphicData
- Displays graphical representation of weekly expenses using Chart.js.
- Includes additional components for today's expenses and variation between today and yesterday.

*TodayExpenses
- Shows today's total expenses.
- VariationTodayYesterday
- Displays the % variation between today's and yesterday's expenses.

Testing
Each component's functionality is accompanied by Jest tests to ensure proper behavior and functionality.

Author
This project was developed by Khrystsina Kozak as part of IT Academy - React course.
