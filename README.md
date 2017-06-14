# Simple react camera by Anh Nguyen

A simple react component to take snapshot using webcam inpired by [react-native-camera](https://github.com/lwansbrough/react-native-camera)

Technologies

 * [React](https://facebook.github.io/react/): JavaScript View library

[**Live demo**](https://emo-detector.herokuapp.com/)


### Usage

Install library:

```javascript
npm i --save simple-react-camera
```

Example usage

```javascript
import React from 'react'
import ReactCamera from 'simple-react-camera'

class CameraWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null
    this.capture = this.capture.bind(this)
  }

  capture() {
    this.camera.snapshot()
      .then(data => {
        /* data: string (base-64-jqeg)
        Process your data here*/
        console.log(data)
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <ReactCamera 
          classNames={'yourCssClassHere'}
          ref={camera => this.camera = camera}
          width={800} 
          height={500} />
        <button onClick={this.capture}>captured</button>
      </div>
    )
  }
}
```

Start example on port 8080:

```javascript
yarn start
```

Compile the distribution build:

```javascript
yarn build
```

Thank you and happy coding!
