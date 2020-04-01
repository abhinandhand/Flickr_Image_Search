# Flickr Image Edges

 Angular frontend application which can display the search result of flickr images search API and calculates the Image Edges for the preview images.

Application is deployed on Github pages and can be accsed through below link

Link to App: https://abhinandhand.github.io/Flickr_Image_Search/FlickrApp


 ## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Node: 12.14.1
Angular CLI: 9.1.0
```

### To Run on local machine

Clone the repository

```
git clone https://github.com/abhinandhand/Flickr_Image_Search.git
```

Open the terminal or command-prompt and navigate to the project folder. 

```
cd Flickr_Image_Search/FlickrApp
```

To building the project

```
npm install
```

To run on local server

```
ng serve
```

### src directory architecture

    src
    ├── app                    
    │   ├── gallery             #  Feature module containing the components 
    │   │  ├── widgets          # Contains & represents number of pages for the application
    │   │  ├── widget-modules   # Contains resusable ui-components
    │   ├── shared              #  Contains services, templates, pipes shared across the project
    │   └── app.routing         #  Routes configuration with 2 pages.For search & preview


### Architectural choices

* Application has 2 pages with search & preview. In future we can include url params for the pages which is helpful for sharing the search results or images as a url. (Had option of creating a modal for preview)

* API information like URL's, API_KEY, defaultPageSize etc... can be configured remotely. Currently have placed the configuraton json under assets/config [Application Configuration API](https://abhinandhand.github.io/Flickr_Image_Search/FlickrApp/assets/config/config.json) through a json file (Work pending)

Link to Configuration JSON - https://abhinandhand.github.io/Flickr_Image_Search/FlickrApp/assets/config/config.json

* Bootstrap 3 as a CSS framework.

* Search results are sorted by relevance. Also can be configured remotely


### Assumptions
* Choosen opencv.js library which is placed under assets/js/opencv.js instead of a npm module


### Requirements completed

* Lists the search results of flickr api - [Completed]
* It supports incremental loading when the user scroll the page - [Completed]
* When you click on one of the images, it calculates the edges of the images - [Completed]
* Responsive app design [Completed]


### Additional features

* Add search params on application url - [Started, not completed]
* Remote Configuration for the application - [Started, not completed]
* Placeholder Images for Image tiles - [Not yet started]
* Spinner/ Loader while fetching the results - [Not yet started]
    








