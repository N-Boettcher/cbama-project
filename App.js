import React from 'react'; //Basic framework
import {
    SafeAreaView,
    StatusBar,
    AppRegistry,
    ScrollView,
    StyleSheet
} from 'react-native'; //Basic framework
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
                <Div flex={1} bg="gray600" rounded="sm">
                    {/* Div Border for Logo
                     * - Logo Icon is located inside this Div*/}
                    <Div h={120} w={120} mt="2xl" bg="gray100" rounded="circle" alignSelf="center" shadow="md" >
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
                        color="gray100"
                        fontSize="5xl"
                        textAlign="center"
                        alignSelf="center">
                        C.B.A.M.A.
                    </Text>
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="sm">
                        <Div h={1} flex={1} bg="gray200" />
                        <Text px="lg" fontSize="sm" color="gray200">
                            The Color Blind Assistant
                        </Text>
                        <Div h={1} flex={1} bg="gray200" />
                    </Div>
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
                            bg="blue400"
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
                            disabled
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
                            bg="blue600"
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
                        <Text px="lg" fontSize="sm" color="gray200">
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
                            shadow="sm"
                            onPress={() => navigation.navigate('About', {})}>
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
                            shadow="sm"
                            onPress={() => navigation.navigate('Credits', {})}>
                            App Credits
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
                            <Text mx="xl" color="gray400" pb="md">
                                Color blind Filters
                            </Text>
                        }
                        mt="md"
                        pb="2xl"
                        bg="gray600"
                        showSwipeIndicator={true}
                        roundedTop="xl">
                        <Dropdown.Option py="md" px="xl" block bg="gray500" color="gray100">
                            Deuteranopia
                        </Dropdown.Option>
                        <Dropdown.Option py="md" px="xl" block bg="gray500" color="gray100">
                            Protanopia
                        </Dropdown.Option>
                        <Dropdown.Option py="md" px="xl" block bg="gray500" color="gray100">
                            Tritanopia
                        </Dropdown.Option>
                        <Dropdown.Option py="md" px="xl" block bg="gray500" color="gray100">
                            Normal Vision
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

/* Creates the help and pallet dropdown menu */
const dropdownAnalyzerHelp = React.createRef();
const dropdownAnalyzerPallet = React.createRef();

function AnalyzerScreen() {
    return (
        <ThemeProvider theme={analyzerTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                {/* Main div container */}
                <Div flex={1} bg="gray600" rounded="sm">
                    {/* Button containers: */}
                    {/* Load Image Button */}
                    <Text
                        mt="40%" textAlign="center" fontSize="5xl" fontWeight="bold" color="gray100"> Analyzer </Text>
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="lg">
                        <Button
                            mx="xl"
                            mt="xl"
                            mb="xl"
                            py="lg"
                            bg="blue400"
                            rounded="circle"
                            shadow="md"
                            disabled
                            prefix={
                                <Icon
                                    h={50}
                                    w={50}
                                    fontSize="6xl"
                                    fontFamily="FontAwesome"
                                    name="image"
                                    color="gray100"
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
                        mt="lg">
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
                                    name="paint-brush"
                                    color="gray100"
                                />
                            }
                            onPress={() => dropdownAnalyzerPallet.current.open()}>
                            Color Blind Pallet
                        </Button>
                        <Dropdown
                            ref={dropdownAnalyzerPallet}
                            showSwipeIndicator={true}
                            roundedTop="xl"
                            block
                            bg="gray600">
                            <Div>
                                <Text fontSize="3xl" borderWidth={1} rounded="lg" px="md" py="md" textAlign="center" justifyContent="center" borderColor="gray200" color="gray100">
                                    <Icon name="paint-brush" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="blue400" />
                                    Color Blind Pallets
                                </Text>
                                <Text fontSize="xl" px="sm" py="md" color="gray100">
                                    The key to a good color blind accessability pallet is to use two contrastings.
                                    Make sure not to use two colorbind colors together however! Avoid reds, greens, and purples for example.
                                </Text>
                                <Text fontSize="xl" px="sm" py="md" color="gray100">
                                    While the most accisable choice will offer the user to pick any color they like,
                                    below are some exmaples of high-contrast combos you can use.
                                </Text>
                                <Div
                                    mx="xl"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexDir="row"
                                    my="md">
                                    <Div h={1} flex={1} bg="gray500" />
                                </Div>
                                <Div
                                    flexDir="row"
                                    justifyContent="center">
                                    <Text h={90} w={90} bg="#FFC20A" textAlign="center" fontSize="xl">
                                        #FFC20A
                                    </Text>
                                    <Text h={90} w={90} bg="#0C7BDC" textAlign="center" fontSize="xl" color="gray100">
                                        #0C7BDC
                                    </Text>
                                </Div>
                                <Div
                                    mx="xl"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexDir="row"
                                    my="md">
                                    <Div h={1} flex={1} bg="gray500" />
                                </Div>
                                <Div
                                    flexDir="row"
                                    justifyContent="center">
                                    <Text h={90} w={90} bg="#994F00" textAlign="center" fontSize="xl">
                                        #994F00
                                    </Text>
                                    <Text h={90} w={90} bg="#006CD1" textAlign="center" fontSize="xl" color="gray100">
                                        #006CD1
                                    </Text>
                                </Div>
                                <Div
                                    mx="xl"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexDir="row"
                                    my="md">
                                    <Div h={1} flex={1} bg="gray500" />
                                </Div>
                                <Div
                                    flexDir="row"
                                    justifyContent="center">
                                    <Text h={90} w={90} bg="#E1BE6A" textAlign="center" fontSize="xl">
                                        #E1BE6A
                                    </Text>
                                    <Text h={90} w={90} bg="#40B0A6" textAlign="center" fontSize="xl" color="gray100">
                                        #40B0A6
                                    </Text>
                                </Div>
                                <Div
                                    mx="xl"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexDir="row"
                                    my="md">
                                    <Div h={1} flex={1} bg="gray500" />
                                </Div>
                            </Div>
                        </Dropdown>
                    </Div>
                    {/* Help Button */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="row"
                        mt="lg">
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
                            bg="gray600"
                            block>
                            <Div>
                                <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" textAlign="center" justifyContent="center" borderColor="gray100" color="gray100">
                                    <Icon name="bar-chart" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="blue400" />
                                    Analyzer
                                </Text>
                                <Text fontSize="xl" px="sm" py="md" color="gray100">
                                    Using the <Icon name="image" fontFamily="FontAwesome" pl="sm" color="blue400" /> Load Image button,
                                    you can select any image to load into the analyzer.
                                </Text>
                                <Text fontSize="xl" px="sm" py="md" color="gray100">
                                    To view information about how you can use color blind pallets, you can select the
                                    <Icon name="paint-brush" fontFamily="FontAwesome" pl="sm" color="blue400" /> Palette button.
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
                <Div flex={1} bg="gray600" rounded="sm" pt="10%">
                    {/* App funciton overview */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        mt="xl">
                        <Text fontSize="5xl" fontWeight="bold" color="gray100">How do I use this app?</Text>
                    </Div>
                    {/* Camera & Gallery Module */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        mt="lg">
                        <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" borderColor="gray100" color="gray100">
                            <Icon name="camera" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="blue400" />
                            Camera & Gallery
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm" color="gray100">
                            Capture pictures using the device's camera. All pictures will be saved to the DIRECTORY.
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm" color="gray100">
                            You can use the <Icon name="filter" fontFamily="FontAwesome" color="blue400" /> filter button to apply any
                            color blind filter to the image.
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm" color="gray100">
                            Color blind filters can be applied in the gallyer using the
                            <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue400" /> filter button as well.
                        </Text>
                    </Div>
                    {/* Analyzer Module */}
                    <Div
                        mx="xl"
                        alignItems="center"
                        justifyContent="center"
                        mt="lg">
                        <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" color="gray100" borderColor="gray100">
                            <Icon name="bar-chart" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="blue400" />
                            Analyzer
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm" color="gray100">
                            Using the <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue400" /> Load Image button,
                            you can select any image to load into the analyzer.
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm" color="gray100">
                            To view information about how color blind pallets you, you can select the
                            <Icon name="filter" fontFamily="FontAwesome" pl="sm" color="blue400" /> Palette button.
                        </Text>
                        <Text fontSize="xl" px="sm" py="sm" color="gray100">
                            Pressing the <Icon name="question" fontFamily="FontAwesome" color="blue400" /> Help button will
                            display this information about how the anaylzer works.
                        </Text>
                    </Div>
                </Div>
            </SafeAreaView>
        </ThemeProvider>
    );
}

/* About Color blindess minipage */
function AboutScreen() {
    return (
        <ThemeProvider theme={homeTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                {/* main background */}
                <ScrollView>
                    <Div flex={1} bg="gray600" rounded="sm">
                        {/* Title text & general info*/}
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="xl">
                            <Text fontSize="5xl" fontWeight="bold" color="gray100">What is color blindness?</Text>
                            <Text fontSize="xl" mx="sm" py="sm" color="gray100">
                                Color blindness is a genetic or acquired inability for the eyes to detect certain colors.
                            </Text>
                            <Text fontSize="xl" mx="sm" py="sm" color="gray100">
                                Where as a normal person will see the full color spectrum, someone color blind will be unable to see certain bands.
                            </Text>
                            <Text fontSize="xl" mx="sm" py="sm" color="gray100">
                                These missing colors are instead changed to be an entirely different color that they are able to detect, say blue.
                            </Text>
                            <Text fontSize="xl" mx="sm" py="sm" color="gray100">
                                This is how color blindness is tested for and diagnosed.
                            </Text>
                        </Div>
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="lg">
                            {/* Red-Green color blind info*/}
                            <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" color="gray100" borderColor="gray200">
                                Red-Green color blindness
                            </Text>
                            <Div row mt="sm" >
                                <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                    Deuteranopia
                                </Text>
                                <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                    Protanopia
                                </Text>
                            </Div>
                            <Div row m="sm">
                                <Image
                                    h={100}
                                    w={100}
                                    m={10}
                                    rounded="circle"
                                    alignSelf="center"
                                    source={require('./assets/deutColorWheel.png')} />
                                <Image
                                    h={100}
                                    w={100}
                                    m={10}
                                    rounded="circle"
                                    alignSelf="center"
                                    source={require('./assets/protColorWheel.png')} />
                            </Div>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                Red-Green color blindness includes both Deuteranopia, a lack of green cones, and
                                Protanopia, alack of red cones.
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                Even though different cones are affected by these,
                                the effects are very similar on color vision.
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                Both greens and reds are omitted and replaced by brown hues.
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                This makes blues and yellows the safest choices for people with these color blindness.
                            </Text>
                        </Div>
                        {/* Blue-Yellow color blindness */}
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="lg"
                            mb="xl">
                            {/* Blue-Ywllow color blind info*/}
                            <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" color="gray100" borderColor="gray200">
                                Blue-Yellow color blindness
                            </Text>
                            <Div row mt="sm" >
                                <Text fontSize="xl" px="lg" py="sm" color="gray100">
                                    Tritanopia
                                </Text>
                                <Text fontSize="xl" px="lg" py="sm" color="gray100">
                                    Normal Vision
                                </Text>
                            </Div>
                            <Div row m="sm">
                                <Image
                                    h={100}
                                    w={100}
                                    m={10}
                                    rounded="circle"
                                    alignSelf="center"
                                    source={require('./assets/tritColorWheel.png')} />
                                <Image
                                    h={100}
                                    w={100}
                                    m={10}
                                    rounded="circle"
                                    alignSelf="center"
                                    source={require('./assets/normColorWheel.png')} />
                            </Div>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                Blue-Yellow color blindness includes only Tritanopia, a lack of blue cones.
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                This has the unique effect of lacking the ability of seeing yellows and shades of blue.
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                Even though this is a blue colorblindness, the eyes will still see light blue, but it lacks the ability to see any shades.
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                Protanopia is the least common of the three common colorblindness.
                            </Text>
                        </Div>
                    </Div>
                </ScrollView>
            </SafeAreaView>
        </ThemeProvider>
    );
}

/* Credits Screen */
function CreditsScreen() {
    return (
        <ThemeProvider theme={homeTheme}>
            {/* Sets the color of the system bar */}
            <StatusBar barStyle="light-content" />
            {/* Ensures the status bar is not covered */}
            <SafeAreaView style={{ flex: 1 }}>
                    <Div flex={1} bg="gray600" rounded="sm">
                        {/* Title text*/}
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="15%">
                            <Text fontSize="5xl" fontWeight="bold" color="gray100">Project Credits</Text>
                        </Div>
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="row"
                            my="md">
                            <Div h={1} flex={1} bg="gray500" />
                        </Div>
                        {/* Nick */}
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="lg">
                            {/* Red-Green color blind info*/}
                            <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" borderColor="gray200" color="gray100">
                            <Icon name="dumpster-fire" fontFamily="FontAwesome5" fontSize="3xl" px="lg" color="blue400" />
                                Nick Boettcher
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                <Icon name="check" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="yellow400" />
                                UI Designer & Programming
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                <Icon name="check" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="yellow400" />
                                Security Updates
                            </Text>
                        </Div>
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="row"
                            my="md">
                            <Div h={1} flex={1} bg="gray500" />
                        </Div>
                        {/* Shane */}
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="lg">
                            {/* Red-Green color blind info*/}
                            <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" borderColor="gray200" color="gray100">
                                <Icon name="broom" fontFamily="FontAwesome5" fontSize="3xl" px="lg" color="blue400" />
                                Shane Harvey
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                <Icon name="check" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="yellow400" />
                                UI Assitance
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                <Icon name="check" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="yellow400" />
                                Functioanlity Assitances
                            </Text>
                        </Div>
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="row"
                            my="md">
                            <Div h={1} flex={1} bg="gray500" />
                        </Div>
                        {/* Garbriel */}
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="lg">
                            {/* Red-Green color blind info*/}
                            <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" borderColor="gray200" color="gray100">
                                <Icon name="calculator" fontFamily="FontAwesome5" fontSize="3xl" px="lg" color="blue400" />
                                Gabriel Adeife
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                <Icon name="check" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="yellow400" />
                                General Application Functionality
                            </Text>
                        </Div>
                        {/* Mike */}
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="row"
                            my="md">
                            <Div h={1} flex={1} bg="gray500" />
                        </Div>
                        <Div
                            mx="xl"
                            alignItems="center"
                            justifyContent="center"
                            mt="lg">
                            {/* Red-Green color blind info*/}
                            <Text fontSize="3xl" borderWidth={1} rounded="lg" px="lg" py="md" borderColor="gray200" color="gray100">
                            <Icon name="football-ball" fontFamily="FontAwesome5" fontSize="3xl" px="lg" color="blue400" />
                                Mike Fanfan
                            </Text>
                            <Text fontSize="xl" px="sm" py="sm" color="gray100">
                                <Icon name="check" fontFamily="FontAwesome" fontSize="3xl" px="lg" color="yellow400" />
                                Motivational Support
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
                {/* Sub pages */}
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Credits" component={CreditsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        );
};

export default App;