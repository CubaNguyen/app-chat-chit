
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCircleUser, faUserGroup, faCommentDots, faBoxArchive, faDoorOpen, faPenToSquare, faMagnifyingGlass, faEllipsis, faVideo, faPhone, faCirclePlus, faImage, faNoteSticky, faGift, faFaceSmile, faThumbsUp, faBell, faAngleRight, faThumbTack, faCircle, faImages, faFileLines, faLink, faBan, faCircleMinus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import './FrameMiddle.scss'
export default class FrameMiddle extends React.Component {

    constructor(props) {
        super(props);

        // Khởi tạo trạng thái (state)
        this.state = {
            isClick: false
        };
    }

    componentDidMount() {

    }

    handleExtendFrameMiddle = () => {
        this.setState({
            isClick: !this.state.isClick

        })
        this.props.handleExtend(this.state.isClick)
    }

    render() {
        let { isClick } = this.state

        return (
            <div className='frameMiddleContainer'>

                <div className='iconContainer'>

                    <div className='avatarContain'>
                        avatar
                    </div>

                    <div className='name'>
                        nameưadsffffffffff
                    </div>

                    <div className='functionsContain'>
                        <div className='call'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='facetime'>
                            <FontAwesomeIcon icon={faVideo} />

                        </div>
                        <div className={isClick === true ? 'moreInfor Active' : 'moreInfor'}
                            onClick={() => this.handleExtendFrameMiddle()}>
                            <div className={isClick === true ? 'contain Active' : 'contain'}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>

                        </div>
                    </div>

                </div>

                <div className='chat'>

                </div>
                <div className='texting'>
                    <div className='fourIcon'>
                        <div className='anotherAction'>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </div>
                        <div className='image'>
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                        <div className='sticker'>
                            <FontAwesomeIcon icon={faNoteSticky} />
                        </div>
                        <div className='gif'>
                            <FontAwesomeIcon icon={faGift} />
                        </div>
                    </div>
                    <div className='textingAndLike'>
                        <div className='text'>
                            <form className='searchForm' >
                                <input className='input'
                                    type="text" placeholder="Aa.." name="search" />
                                <div className='iconSmile'>
                                    <FontAwesomeIcon icon={faFaceSmile} />
                                </div>
                            </form>
                        </div>
                        <div className='like'>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

