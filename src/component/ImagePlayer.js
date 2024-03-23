import React from 'react'
import "./css/ImagePlayer.css"


function ImagePlayer(props) {

  const [firstTime, setFirstState] = React.useState(false)
  const playShownVideo = (width, firstTime) => {
    if (firstTime) {
      var ss = document.querySelector(`[data-pid="${props.data.postID}"]`).querySelector(".slider")
      if (width >= 500) {
        var w = 500
      } else {
        w = width
      }
      const vv = document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelectorAll(".video")
      var videos = Array.from(vv)
      videos && videos.map((video) => {
        video.pause()
        return null
      })
      if (ss.children[ss.scrollLeft / w].children[0].tagName === "VIDEO") {
        ss.children[ss.scrollLeft / w].children[0].play()
        document.querySelector(`[data-pid="${props.data.postID
          }"]`).querySelector("#playStop").className = "playStop disable"
      }
    } else {
      // const vv = document.querySelector(`[data-pid="${props.data.postID
      // }"]`).querySelectorAll(".video")
      // var videos = Array.from(vv)
      videos && videos.map((video) => {
        video.pause()
        return null
      })
      document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelector("#playStop").className = "playStop"
    }
  }

  const chicker = (e) => {
    const ss = document.querySelector(`[data-pid="${props.data.postID
      }"]`).querySelector(".slider")
    if (window.innerWidth > 500) {
      setTimeout(() => {
        document.querySelector(`[data-pid="${props.data.postID
          }"]`).querySelector("#currentSpan").innerText = Math.ceil((document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".slider").scrollLeft + 500) / 500)
        document.querySelector(`[data-pid="${props.data.postID
          }"]`).querySelector(".bullets").children[document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".slider").scrollLeft / 500].className = "bullet acf"
        if (ss.scrollLeft === 0) {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageBefore").style.display = "none"
        } else {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageBefore").style.display = "block"
        }
        if (ss.scrollLeft === 500 * (props.data.mediaFiles.length - 1)) {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageAfter").style.display = "none"
        } else {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageAfter").style.display = "block"
        }
        if (ss.children[ss.scrollLeft / 500].children[0].tagName === "VIDEO") {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".volume").style.display = "block"
        } else {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".volume").style.display = "none"
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector("#playStop").className = "playStop disable"
        }
      }, 500);
      var bulletz = Array.from(document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelector(".bullets").children) || null
      bulletz && bulletz.map((bullet) => {
        bullet.className = "bullet"
        return null
      });
      setTimeout(() => {
        playShownVideo(window.innerWidth, firstTime)
      }, 300);
    } else {
      setTimeout(() => {
        document.querySelector(`[data-pid="${props.data.postID
          }"]`).querySelector("#currentSpan").innerText = Math.ceil((document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".slider").scrollLeft + window.innerWidth) / window.innerWidth)
        document.querySelector(`[data-pid="${props.data.postID
          }"]`).querySelector(".bullets").children[document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".slider").scrollLeft / window.innerWidth].className = "bullet acf"
        if (ss.scrollLeft === 0) {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageBefore").style.display = "none"
        } else {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageBefore").style.display = "block"
        }
        if (ss.scrollLeft === window.innerWidth * (props.data.mediaFiles.length - 1)) {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageAfter").style.display = "none"
        } else {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".imageAfter").style.display = "block"
        }
        if (ss.children[ss.scrollLeft / window.innerWidth].children[0].tagName === "VIDEO") {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".volume").style.display = "block"
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector("#playStop").className = "playStop"
        } else {
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector(".volume").style.display = "none"
          document.querySelector(`[data-pid="${props.data.postID
            }"]`).querySelector("#playStop").className = "playStop disable"
        }
      }, 500);
      bulletz = Array.from(document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelector(".bullets").children)
      bulletz && bulletz.map((bullet) => {
        bullet.className = "bullet"
        return null
      });
    }
  }

  var isScrolling
  const handle = (e) => {
    const ss = document.querySelector(`[data-pid="${props.data.postID
      }"]`).querySelector(".slider")
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      if (window.innerWidth > 500) {
        for (let i = 0; i < props.data.mediaFiles.length; i++) {
          if (ss.scrollLeft >= (i * 500) && ss.scrollLeft < (2 * i + 1) * 250) {
            setTimeout(() => {
              ss.scrollLeft = 500 * i
            }, 200);
            setTimeout(() => {
              chicker()
            }, 300);
            break;
          }
          if (ss.scrollLeft > (2 * i + 1) * 250 && ss.scrollLeft < (i + 1) * 500) {
            setTimeout(() => {
              ss.scrollLeft = 500 * (i + 1)
            }, 300);
            setTimeout(() => {
              chicker()
            }, 300);
            break;
          }
        }
      } else {
        for (let i = 0; i < props.data.mediaFiles.length; i++) {
          if (ss.scrollLeft > (i * window.innerWidth) && ss.scrollLeft < (2 * i + 1) * (window.innerWidth / 2)) {
            setTimeout(() => {
              ss.scrollLeft = window.innerWidth * i
            }, 200);
            setTimeout(() => {
              chicker()
            }, 300);
            break;
          }
          if (ss.scrollLeft > (2 * i + 1) * (window.innerWidth / 2) && ss.scrollLeft < (i + 1) * window.innerWidth) {
            setTimeout(() => {
              ss.scrollLeft = window.innerWidth * (i + 1)
            }, 300);
            setTimeout(() => {
              chicker()
            }, 300);
            break;
          }
        }
      }
    }, 200)
  }


  const brev = (e) => {
    e.stopPropagation();
    const ss = document.querySelector(`[data-pid="${props.data.postID
      }"]`).querySelector(".slider")
    if (window.innerWidth > 500) {
      if (ss.scrollLeft <= 0) {
        ss.scrollLeft = 0
      } else {
        ss.scrollLeft -= 500
      }
      chicker()
    } else {
      if (ss.scrollLeft <= 0) {
        ss.scrollLeft = 0
      } else {
        ss.scrollLeft -= window.innerWidth
      }
      chicker()
    }
  }

  const next = (e) => {
    e.stopPropagation()
    const ss = document.querySelector(`[data-pid="${props.data.postID
      }"]`).querySelector(".slider")
    if (window.innerWidth > 500) {
      if (ss.scrollLeft > (props.data.mediaFiles.length - 1) * 500) {
        ss.scrollLeft = (props.data.mediaFiles.length - 1) * 500
      } else {
        ss.scrollLeft += 500
      }
      chicker()
    } else {
      if (ss.scrollLeft > (props.data.mediaFiles.length - 1) * window.innerWidth) {
        ss.scrollLeft = (props.data.mediaFiles.length - 1) * window.innerWidth
      } else {
        ss.scrollLeft += window.innerWidth
      }
      chicker()
    }
  }

  window.addEventListener("load", (e) => {
    chicker()
  })
  const video = (e) => {
    e.stopPropagation()
    var ss = document.querySelector(`[data-pid="${props.data.postID
      }"]`).querySelector(".slider")
    var v = ss.children[ss.scrollLeft / 500].children[0]
    if (v.paused) {
      v.play()
      document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelector("#playStop").className = "playStop disable"
      setFirstState({
        firstTime: true
      })
    } else {
      v.pause()
      document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelector("#playStop").className = "playStop"
    }
  }

  const volume = (e) => {
    var ss = document.querySelector(`[data-pid="${props.data.postID
      }"]`).querySelector(".slider")
    var v = ss.children[ss.scrollLeft / 500].children[0]
    if (v.volume === 1) {
      v.volume = 0
      document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelector(".volume i").className = "fa-solid fa-volume-xmark"
    } else {
      v.volume = 1
      document.querySelector(`[data-pid="${props.data.postID
        }"]`).querySelector(".volume i").className = "fa-solid fa-volume-high"
    }
  }

  const slider = (
    <div className='slider' onWheel={handle}>
      {props.data.mediaFiles && props.data.mediaFiles.map((image, i) => {
        if (/\w+.(mp4|mkv|mvo)/g.test(image)) {
          return (
            <div className='slide' key={i + 1}>
              <video
                className='video'
                data-index={i + 1}
                onClick={video}
                src={require(`${image}`)}
                autoPlay={"autoPlay"}
              />
            </div>
          )
        }
        if (/\w+.(jpg|png|tiff|jpeg)/g.test(image)) {
          return (
            <div className='slide' key={i + 1}>
              <img
                src={require(`${image}`)}
                data-index={i + 1}
                alt="fuck"
              />
            </div>
          )
        }
        return null
      })}
    </div>
  )
  var bullets = (
    <div className='bullets'>
      {props.data.mediaFiles && props.data.mediaFiles.map((image, i) => {
        return (
          <div className='bullet' key={i + 1} data-index={i + 1}></div>
        )
      })}
    </div>
  )

  return (
    <div className='imageContainer' >
      <div className='imageBefore' onClick={brev}>
        <i className='fas fa-chevron-circle-left'></i>
      </div>
      <div className='imageAfter' onClick={next}>
        <i className='fas fa-chevron-circle-right'></i>
      </div>
      <div className='number'><span id='currentSpan'>{1}</span>/{props.data.mediaFiles.length}</div>
      {slider}
      {bullets}
      <div className='volume disable' onClick={volume}>
        <i className="fa-solid fa-volume-high" ></i>
      </div>
      <div className='playStop disable' id='playStop' onClick={video}>
        <i className="fa-solid fa-play"></i>
      </div>
    </div>
  )
}

export default ImagePlayer