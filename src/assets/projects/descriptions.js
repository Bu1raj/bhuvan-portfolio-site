import slrHello from './imgs/slr/slr-hello.jpeg';
import slrHelp from './imgs/slr/slr-help.jpeg';
import slrThankYou from './imgs/slr/slr-thankyou.jpeg';
import AppHomeScreen from './imgs/flutter-app/flutter-home-screen.jpeg';
import AppArenaScreen from './imgs/flutter-app/flutter-arena-management.jpeg';
import AppInventoryScreen from './imgs/flutter-app/flutter-inventory-management.jpeg';

const descriptions =
{
    project1: {
        'title': 'Real time sign language recognition',
        'image1': slrHello,
        'image2': slrHelp,
        'image3': slrThankYou,
        'description1': 'This application detects and recognizes signs made by a person in a live video stream and converts them into meaningful English sentences. It uses the SSD-MobileNetV2 FPNLite 320x320 model from the TensorFlow Model Zoo to identify the signs.',
        'description2': 'I trained the model on a dataset of 10 signs using transfer learning. To convert the signs to text, I stored the signs displayed within a specific time frame in an array and made an API call to Gemini. The prompt to Gemini was to generate a meaningful sentence using the recognized signs stored in the array.',
        'technologies': 'Python, TensorFlow, OpenCV, Gemini API',
        'route': '/sign-language-recognition'
    },

    project2 : {
        'title': 'Sports Complex Management System',
        'image1': AppHomeScreen,
        'image3': AppArenaScreen,
        'image2': AppInventoryScreen,
        'description1': "This Flutter application serves as a management tool for our university's sports complex, accommodating two user roles: staff and students. Staff members can issue sports equipment to students, manage inventory and sports arena operations, and organize tournaments. Students can view the equipment assigned to them, check return deadlines, book sports arenas, and register for tournaments directly within the app.",
        'description2': "The app integrates Firebase for authentication and database functionalities, alongside MySQL for additional database support. Built with Flutter, it boasts a user-friendly interface that is intuitive to navigate. Currently in development, I am actively enhancing the app with new features.",
        'technologies': 'Flutter, Firebase, MySQL, ExpressJS, NodeJS',
        'route': '/flutter-scms'
    },
}

export default descriptions;
