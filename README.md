# CV application

This project is part of The Odin Project curriculum. It involves creating a functional CV application where users can input their information, and the app dynamically updates to display their CV in a structured and professional format.

## Features
* Dynamic form input: Users can fill out fields for their personal information, work experience, education, and skills.
* Live preview: The application provides a real-time preview of the CV as users input their details.
* Editable sections: Users can edit and update the information seamlessly.
* Submit and cancel options: Options to submit or reset the form data.

## Installaion
To run this project locally, follow these steps:
1. Clone the repository
```
git clone [https://github.com/iRpro16/cv-app.git]
```

2. Navigate to the project directory:
```
cd cv-application
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

## Usage
1. Open the application in your browser at http://localhost:3000.
2. Fill in the form fields for personal information, work experience, and education.
3. Preview your CV dynamically.

## Learning outcomes
* State Management: Efficiently managing dynamic form inputs in React.
* Conditional Rendering: Displaying form values dynamically.
* Component Structuring: Modularizing React components for better maintainability.
* User Interaction: Handling form events and user inputs.

## Challenges and solutions:
### Lifting state up
Challenge: Getting the user input from on component to display in another component.\
Solution: Lifting the state up by moving the states to the closest common parent to reflect the same changing data.

### Setting the state of nested data
Challenge: Changing the data of object properties inside of nested data.\
Solution: Creating a seperate function that searched for the matching object, set the property value and returned the new object.

## Future Improvements
* Add local storage to persist user data.
* Implement drag-and-drop functionality for reordering CV sections.
* Add print/export to PDF feature.

## Conclusion
This project was a great learning experience, enhancing my skills in React and dynamic form handling. It provided insights into creating interactive and user-friendly applications.

## Acknowledgments
Thanks to The Odin Project for providing comprehensive resources and project ideas.
