import React from 'react'; //Basic framework
import { SafeAreaView, StatusBar, AppRegistry, FlatList } from 'react-native'; //Basic framework
import { NavigationContainer } from '@react-navigation/native'; //Navigation between application pages
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Also used for page navigation
import {
    Div,
    Text,
    Button,
    Image,
    Header,
    Icon,
    Input,
    Dropdown,
    ThemeProvider,
} from 'react-native-magnus'; //All UI elements
import Constants from 'expo-constants'; //Unsure if we need this ATM

/* 
 * Code by Nicholas Boettcher 
 * Last updated: 04/11/23
 * CBAMA Application
 * Contains all links to app functions
 */

/* 
 * Home Screen for Application
 * Home Theme: Applies a uniform theme to the whole page
 */
const homeTheme = {
    bg: {
        white000: "#FFFFFF",
    }
}

function HomeScreen({ navigation }) {
    return (
        /* Theme provider allows Magnus UI to function */
        <ThemeProvider theme={homeTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                {/* Main content div for the entire page
                 * - All page content (except BG) is in this main div
                 * - bg can be set to help reveal for debug purposes*/}
                <Div flex={1} bg="#FFFFFF" rounded="sm">
                    {/* Div Border for Logo
                     * - Logo Icon is located inside this Div*/}
                    <Div h={120} w={120} mt="2xl" bg="blue100" rounded="circle" alignSelf="center" shadow="md" >
                        <Image
                            h={100}
                            w={100}
                            m={10}
                            rounded="circle"
                            alignSelf="center"
                            source={require('./assets/temp-logo.png')} />
                    </Div>
                    {/* Title Text */}
                    <Text
                        mt="2xl"
                        mx="xl"
                        w="50%"
                        fontWeight="bold"
                        fontSize="5xl"
                        textAlign="center"
                        alignSelf="center">
                        Color Blind Assistance (TEST 6)
                    </Text>
                    {/* Top Button Row 
                     * - Contains the Camera Button and Analyzer Button 
                     * - Will need to work on animations*/}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="lg">
                        {/* Camera Button */}
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue600"
                            rounded="circle"
                            shadow="md"
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="camera-retro"
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => navigation.navigate('Camera', {})}>
                        </Button>
                        {/* Analyzer Button */}
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue500"
                            rounded="circle"
                            shadow="md"
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="bar-chart"
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => navigation.navigate('Analyzer', {})}>
                        </Button>
                    </Div>
                    {/* Bottom Button Row 
                     * - Contains the Gallery Button and Help Button 
                     * - Will need to work on animations*/}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="xs">
                        {/* Gallery Button */}
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue500"
                            rounded="circle"
                            shadow="md"
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="picture-o"
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => navigation.navigate('Gallery', {})}>
                        </Button>
                        {/* Help Button */}
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue400"
                            rounded="circle"
                            shadow="md"
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="question"
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => navigation.navigate('Help', {})}>
                        </Button>
                    </Div>
                    {/* Bottom Stuff */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="xl">
                        <Div h={1} flex={1} bg="gray200" />
                        <Text px="lg" fontSize="sm" color="gray500">
                            Additional Information
                        </Text>
                        <Div h={1} flex={1} bg="gray200" />
                    </Div>
                    {/* Bottom Colorblind Options */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="xl">
                        <Button
                            mr="md"
                            flex={1}
                            py="lg"
                            rounded="circle"
                            borderWidth={1}
                            borderColor="gray200"
                            bg="white"
                            color="gray900"
                            shadow="sm">
                            Color Blindness
                        </Button>
                        <Button
                            ml="md"
                            flex={1}
                            py="lg"
                            rounded="circle"
                            borderWidth={1}
                            borderColor="gray200"
                            bg="white"
                            color="gray900"
                            shadow="sm">
                            About The App
                        </Button>
                    </Div>
                </Div>
            </SafeAreaView>
        </ThemeProvider>
    );
}

/*
 * Camera Screen
 * Camera Theme includes custom themes for the page
 */
const cameraTheme = {
    bg: {
        white000: "#FFFFFF",
    }
}

/* Creates the filter dropdown menu */
const dropdownCamFilter = React.createRef();

function CameraScreen() {
    return (
        <ThemeProvider theme={cameraTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                {/* Camera view */}
                <Div flex={5} bg="gray700">
                    <Text color="gray100" textAlign="center" mt="lg" fontSize="4xl">Camera screen here</Text>
                </Div>
                {/* Camera function zone */}
                <Div
                    mb="sm"
                    bg="gray900"
                    alignItems="center"
                    justifyContent="center"
                    flexDir="row">
                    {/* Filter Button */}
                    <Button
                        mx="lg"
                        mt="lg"
                        mb="lg"
                        py="lg"
                        bg="gray100"
                        rounded="circle"
                        alignSelf="center"
                        prefix={
                            <Icon
                                h={30}
                                w={30}
                                fontSize="5xl"
                                fontFamily="AntDesign"
                                name="filter"
                                color="gray900"
                            />
                        }
                    onPress={() => dropdownCamFilter.current.open()}>
                    </Button>
                    {/* Filter selector dropdown */}
                    <Dropdown
                        ref={dropdownCamFilter}
                        title={
                            <Text mx="xl" color="gray500" pb="md">
                                Colorblind Filters
                            </Text>
                        }
                        mt="md"
                        pb="2xl"
                        showSwipeIndicator={true}
                        roundedTop="xl">
                        <Dropdown.Option py="md" px="xl" block>
                            Deuteranopia
                        </Dropdown.Option>
                        <Dropdown.Option py="md" px="xl" block>
                            Protanopia
                        </Dropdown.Option>
                        <Dropdown.Option py="md" px="xl" block>
                            Tritanopia
                        </Dropdown.Option>
                    </Dropdown>
                    {/* Snap Picture buttons */}
                    <Button
                        mx="lg"
                        mt="lg"
                        mb="lg"
                        py="lg"
                        bg="gray100"
                        rounded="circle"
                        shadow="md"
                        alignSelf="center"
                        prefix={
                            <Icon
                                h={50}
                                w={50}
                                fontSize="6xl"
                                fontFamily="FontAwesome"
                                name="circle-o"
                                color="gray900"
                            />
                        }>
                    </Button>
                    {/*Flip Camera Button*/}
                    <Button
                        mx="lg"
                        mt="lg"
                        mb="lg"
                        py="lg"
                        bg="gray100"
                        rounded="circle"
                        shadow="md"
                        alignSelf="center"
                        prefix={
                            <Icon
                                h={30}
                                w={30}
                                fontSize="5xl"
                                fontFamily="MaterialCommunityIcons"
                                name="camera-flip-outline"
                                color="gray900"
                            />
                        }>
                    </Button>
                </Div>
            </SafeAreaView>
        </ThemeProvider>
    );
}

/*
 * Analyzer Screen
 */
const analyzerTheme = {
    bg: {
        test: "#00FF44",
    }
}

/* Creates the filter dropdown menu */
const dropdownAnalyzerHelp = React.createRef();

function AnalyzerScreen() {
    return (
        <ThemeProvider theme={analyzerTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                {/* Main div container */}
                <Div flex={1} bg="#FFFFFF" rounded="sm">
                    {/* Button containers: */}
                    {/* Load Image Button */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="40%"
                        bg="pink300">
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue600"
                            rounded="circle"
                            shadow="md"
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="camera-retro"
                                    color="#FFFFFF"
                                />
                            }>
                            Load Image
                        </Button>
                    </Div>
                    {/* Collar Blind Pallets Button */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="lg"
                        bg="pink300">
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue600"
                            rounded="circle"
                            shadow="md"
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="camera-retro"
                                    color="#FFFFFF"
                                />
                            }>
                            Color blind Pallet
                        </Button>
                    </Div>
                    {/* Help Button */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="lg"
                        bg="pink300">
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue600"
                            rounded="circle"
                            shadow="md"
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="camera-retro"
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => dropdownAnalyzerHelp.current.open()}>
                            How To Use
                        </Button>
                        <Dropdown
                            ref={dropdownAnalyzerHelp}
                            showSwipeIndicator={true}
                            roundedTop="xl"
                            block>
                            <Div>
                                <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" textAlign="center" justifyContent="center">
                                    <Icon name="bar-chart" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="blue600" />
                                    Analyzer
                                </Text>
                                <Text fontSize="xl" px="sm" py="md">
                                    Using the <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue600" /> Load Image button,
                                    you can select any image to load into the analyzer.
                                </Text>
                                <Text fontSize="xl" px="sm" py="md">
                                    To view information about how color blind pallets you, you can select the
                                    <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue600" /> Palette button.
                                </Text>
                            </Div>
                        </Dropdown>
                    </Div>
                </Div>
            </SafeAreaView>
        </ThemeProvider>
    );
}

/*
 * Gallery Screen
 * Gallery custom themes
 */
const galleryTheme = {
    color: {
        white000: "#FFFFFF",
    }
}

function GalleryScreen() {
    return (
        <ThemeProvider theme={galleryTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                <Div flex={1} bg="gray100" rounded="sm">
                    <Text>Gallery Page. Need to find a good library for one still</Text>
                </Div>
            </SafeAreaView>
        </ThemeProvider>
    );
}

/*
 * Help Screen
 * Help Theme
 */
const helpTheme = {
    bg: {
        white000: "#FFFFFF",
    }
}

function HelpScreen() {
    return (
        <ThemeProvider theme={helpTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                {/* main BG div */}
                <Div flex={1} bg="#FFFFFF" rounded="sm">
                    {/* App funciton overview */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        bg="pink300"
                        mt="lg">
                        <Text fontSize="5xl">Module Explainations</Text>
                    </Div>
                    {/* Camera & Gallery Module */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        bg="pink300"
                        mt="lg">
                        <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md">
                            <Icon name="camera" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="blue600" />
                            Camera & Gallery
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm">
                            Capture pictures using the device's camera. All pictures will be saved to the DIRECTORY.
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm">
                            You can use the <Icon name="filter" fontFamily="FontAwesome" color="blue600" /> filter button to apply any
                            color blind filter to the image.
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm">
                            Color blind filters can be applied in the gallyer using the
                            <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue600" /> filter button as well.
                        </Text>
                    </Div>
                    {/* Analyzer Module */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        bg="pink300"
                        mt="lg">
                        <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md">
                            <Icon name="bar-chart" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="blue600" />
                            Analyzer
                        </Text>
                        <Text fontSize="xl" px="sm">
                            Using the <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue600" /> Load Image button,
                            you can select any image to load into the analyzer.
                        </Text>
                        <Text fontSize="xl" px="sm">
                            To view information about how color blind pallets you, you can select the
                            <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue600" /> Palette button.
                        </Text>
                        <Text fontSize="xl" px="sm">
                            Pressing the <Icon name="question" fontFamily="FontAwesome" color="blue600" /> Help button will
                            display this information about how the anaylzer works.
                        </Text>
                    </Div>
                </Div>
            </SafeAreaView>
        </ThemeProvider>
    );
}

/* Create the naviagtion stack */
const Stack = createNativeStackNavigator();

/* Main application construct */
const App = () => {
    return (
        /* Navigation Wrapper */
        <NavigationContainer>
            {/* This sets the inital page to be the Home Screen */}
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                {/* Nav Stack Directory */}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="Analyzer" component={AnalyzerScreen} />
                <Stack.Screen name="Gallery" component={GalleryScreen} />
                <Stack.Screen name="Help" component={HelpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        );
};

export default App;