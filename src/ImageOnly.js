import React, {Fragment} from "react";

export class ImageOnly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: true
        }
        this.showImageHandler = this.showImageHandler.bind(this);
    }

    showImageHandler(event) {
        const target = event.target;
        const value =target.checked;
        this.setState({
            showImage: value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="rightBody">
                    <h4>Show Image</h4>
                    <input
                        name="isGoing" type="checkbox"
                        checked={this.state.showImage}
                        onChange={this.showImageHandler}/>
                    <div className="graphicsSelector">
                        <div className="routerImage">
                            <img className={this.state.showImage? "routerImage": "routerImage hidden"}
                                src="https://img-en.fs.com/community/wp-content/uploads/2017/10/How-routers-route-packets-from-the-source-to-the-destination.jpg"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default ImageOnly;