import React, {Fragment} from "react";

export class ImageOnly extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="rightBody">
                    <form>
                        <div className="graphicsSelector">
                            <div className="routerImage">
                                <img
                                    src="https://img-en.fs.com/community/wp-content/uploads/2017/10/How-routers-route-packets-from-the-source-to-the-destination.jpg"/>
                            </div>
                         </div>
                    </form>
                </div>
            </React.Fragment>
        )
    };
}
export default ImageOnly;