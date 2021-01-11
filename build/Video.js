"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Video = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _openFullscreen = require("./utils/open-fullscreen");

var _closeFullscreen = require("./utils/close-fullscreen");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Video = /*#__PURE__*/function (_Component) {
  _inherits(Video, _Component);

  var _super = _createSuper(Video);

  function Video() {
    var _this;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_root", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "setNativeProps", function () {});

    _defineProperty(_assertThisInitialized(_this), "seek", function (time, _) {
      var element = _this._root.current;

      if (element) {
        element.currentTime = time;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "save", function () {
      console.log("Saving in local..");
      return Promise.resolve();
    });

    _defineProperty(_assertThisInitialized(_this), "presentFullscreenPlayer", function () {
      var element = _this._root.current;

      if (element) {
        (0, _openFullscreen.openFullscreen)(element);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dismissFullscreenPlayer", function () {
      (0, _closeFullscreen.closeFullscreen)();
    });

    _defineProperty(_assertThisInitialized(_this), "_onProgress", function (event) {
      var element = _this._root.current;

      if (_this.props.onProgress) {
        _this.props.onProgress({
          currentTime: element.currentTime,
          // timeStamp: event.timeStamp,
          // @todo add support for these values
          playableDuration: 0,
          seekableDuration: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onLoadStart", function () {
      if (_this.props.onLoadStart) {
        _this.props.onLoadStart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onLoad", function () {
      var element = _this._root.current;

      if (_this.props.onLoad && element) {
        _this.props.onLoad({
          canPlayFastForward: true,
          canPlayReverse: true,
          canPlaySlowForward: true,
          canStepBackward: true,
          canStepForward: true,
          canPlaySlowReverse: true,
          currentTime: element.currentTime,
          duration: element.duration,
          naturalSize: {
            height: element.videoHeight,
            width: element.videoWidth,
            orientation: "horizontal"
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onError", function (error) {
      if (_this.props.onError) {
        _this.props.onError({
          error: {
            "": "",
            errorString: error instanceof Error ? error.message : "Unexpected error"
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onSeek", function () {
      var element = _this._root.current;

      if (_this.props.onSeek && element) {
        _this.props.onSeek({
          currentTime: element.currentTime,
          // @todo add support for these values
          seekTime: 0,
          target: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onEnd", function () {
      if (_this.props.onEnd) {
        _this.props.onEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          volume = _this$props.volume,
          muted = _this$props.muted,
          repeat = _this$props.repeat,
          controls = _this$props.controls,
          paused = _this$props.paused,
          style = _this$props.style,
          poster = _this$props.poster;
      return (0, _react.createElement)("div", {
        style: {
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "56.25%"
        }
      }, (0, _react.createElement)("video", {
        ref: _this._root,
        src: _this._url,
        onLoadStart: _this._onLoadStart,
        onLoadedData: _this._onLoad,
        onError: _this._onError,
        onProgress: _this._onProgress,
        onSeeking: _this._onSeek,
        onEnded: _this._onEnd,
        onLoadedMetadata: _this.props.onTimedMetadata,
        onCanPlay: _this.props.onReadyForDisplay,
        onStalled: _this.props.onPlaybackStalled,
        volume: volume,
        controls: controls,
        paused: paused,
        muted: muted,
        loop: repeat,
        autoPlay: !paused,
        style: _objectSpread({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }, _reactNative.StyleSheet.flatten(style)),
        poster: poster,
        playsInline: true
      }));
    });

    return _this;
  }

  _createClass(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          fullscreen = _this$props2.fullscreen,
          rate = _this$props2.rate,
          seek = _this$props2.seek;
      var element = this._root.current;

      if (element) {
        if (fullscreen) {
          (0, _openFullscreen.openFullscreen)(element);
        } // element.addEventListener("progress", this._onProgress);


        element.addEventListener("timeupdate", this._onProgress);
        element.addEventListener("seeking", this._onSeek);
        element.addEventListener("ended", this._onEnd);

        if (rate) {
          element.playbackRate = rate;
        }

        if (seek) {
          this.seek(seek);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          fullscreen = _this$props3.fullscreen,
          rate = _this$props3.rate,
          seek = _this$props3.seek,
          currentTime = _this$props3.currentTime,
          paused = _this$props3.paused;
      var element = this._root.current;

      if (element) {
        if (fullscreen !== prevProps.fullscreen) {
          if (fullscreen) {
            (0, _openFullscreen.openFullscreen)(element);
          } else {
            (0, _closeFullscreen.closeFullscreen)();
          }
        }

        if (rate !== prevProps.rate && rate) {
          element.playbackRate = rate;

          if (this.props.onPlaybackRateChange) {
            this.props.onPlaybackRateChange({
              playbackRate: rate
            });
          }
        }

        if (seek !== prevProps.seek && seek) {
          element.currentTime = seek;
        }

        if (currentTime !== prevProps.currentTime && currentTime) {
          element.currentTime = currentTime;
        }

        if (paused !== prevProps.paused && paused !== undefined) {
          if (paused) {
            element.pause();
          } else {
            element.play();
          }
        }
      }
    }
  }, {
    key: "_url",
    get: function get() {
      var source = this.props.source;
      return typeof source !== "number" ? source.uri : source;
    }
  }]);

  return Video;
}(_react.Component);

exports.Video = Video;
var _default = Video;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WaWRlby50c3giXSwibmFtZXMiOlsiVmlkZW8iLCJ0aW1lIiwiXyIsImVsZW1lbnQiLCJfcm9vdCIsImN1cnJlbnQiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50IiwicHJvcHMiLCJvblByb2dyZXNzIiwicGxheWFibGVEdXJhdGlvbiIsInNlZWthYmxlRHVyYXRpb24iLCJvbkxvYWRTdGFydCIsIm9uTG9hZCIsImNhblBsYXlGYXN0Rm9yd2FyZCIsImNhblBsYXlSZXZlcnNlIiwiY2FuUGxheVNsb3dGb3J3YXJkIiwiY2FuU3RlcEJhY2t3YXJkIiwiY2FuU3RlcEZvcndhcmQiLCJjYW5QbGF5U2xvd1JldmVyc2UiLCJkdXJhdGlvbiIsIm5hdHVyYWxTaXplIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJvcmllbnRhdGlvbiIsImVycm9yIiwib25FcnJvciIsImVycm9yU3RyaW5nIiwiRXJyb3IiLCJtZXNzYWdlIiwib25TZWVrIiwic2Vla1RpbWUiLCJ0YXJnZXQiLCJvbkVuZCIsInZvbHVtZSIsIm11dGVkIiwicmVwZWF0IiwiY29udHJvbHMiLCJwYXVzZWQiLCJzdHlsZSIsInBvc3RlciIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsInJlZiIsInNyYyIsIl91cmwiLCJfb25Mb2FkU3RhcnQiLCJvbkxvYWRlZERhdGEiLCJfb25Mb2FkIiwiX29uRXJyb3IiLCJfb25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIl9vblNlZWsiLCJvbkVuZGVkIiwiX29uRW5kIiwib25Mb2FkZWRNZXRhZGF0YSIsIm9uVGltZWRNZXRhZGF0YSIsIm9uQ2FuUGxheSIsIm9uUmVhZHlGb3JEaXNwbGF5Iiwib25TdGFsbGVkIiwib25QbGF5YmFja1N0YWxsZWQiLCJsb29wIiwiYXV0b1BsYXkiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJvYmplY3RGaXQiLCJTdHlsZVNoZWV0IiwiZmxhdHRlbiIsInBsYXlzSW5saW5lIiwiZnVsbHNjcmVlbiIsInJhdGUiLCJzZWVrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXliYWNrUmF0ZSIsInByZXZQcm9wcyIsIm9uUGxheWJhY2tSYXRlQ2hhbmdlIiwidW5kZWZpbmVkIiwicGF1c2UiLCJwbGF5Iiwic291cmNlIiwidXJpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNYUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSSx1Qjs7cUVBT1EsWUFBTSxDQUFFLEM7OzJEQUVsQixVQUFDQyxJQUFELEVBQWVDLENBQWYsRUFBOEI7QUFDM0MsVUFBTUMsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1pBLFFBQUFBLE9BQU8sQ0FBQ0csV0FBUixHQUFzQkwsSUFBdEI7QUFDQTtBQUNELEs7OzJEQUVhLFlBQXFCO0FBQ2xDTSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0EsSzs7OEVBRWdDLFlBQU07QUFDdEMsVUFBTVAsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1osNENBQWVBLE9BQWY7QUFDQTtBQUNELEs7OzhFQUVnQyxZQUFNO0FBQ3RDO0FBQ0EsSzs7a0VBbUVxQixVQUFDUSxLQUFELEVBQWdCO0FBQ3JDLFVBQU1SLE9BQU8sR0FBRyxNQUFLQyxLQUFMLENBQVdDLE9BQTNCOztBQUVBLFVBQUksTUFBS08sS0FBTCxDQUFXQyxVQUFmLEVBQTJCO0FBQzFCLGNBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQjtBQUNyQlAsVUFBQUEsV0FBVyxFQUFFSCxPQUFPLENBQUVHLFdBREQ7QUFFckI7QUFFQTtBQUNBUSxVQUFB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dCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCwgUmVhY3RFdmVudEhhbmRsZXIsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCB7IFZpZGVvUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdC1uYXRpdmUtdmlkZW9cIjtcbmltcG9ydCB7IG9wZW5GdWxsc2NyZWVuIH0gZnJvbSBcIi4vdXRpbHMvb3Blbi1mdWxsc2NyZWVuXCI7XG5pbXBvcnQgeyBjbG9zZUZ1bGxzY3JlZW4gfSBmcm9tIFwiLi91dGlscy9jbG9zZS1mdWxsc2NyZWVuXCI7XG5cbmV4cG9ydCB0eXBlIFZpZGVvU291cmNlID0geyB1cmk/OiBzdHJpbmcgfSB8IG51bWJlcjtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVmlkZW9Qcm9wZXJ0aWVzIHt9XG5cbmV4cG9ydCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuXHRwcml2YXRlIF9yb290ID0gY3JlYXRlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KCk7XG5cblx0cHJpdmF0ZSBnZXQgX3VybCgpOiBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGNvbnN0IHsgc291cmNlIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiB0eXBlb2Ygc291cmNlICE9PSBcIm51bWJlclwiID8gc291cmNlLnVyaSA6IHNvdXJjZTtcblx0fVxuXG5cdHB1YmxpYyBzZXROYXRpdmVQcm9wcyA9ICgpID0+IHt9O1xuXG5cdHB1YmxpYyBzZWVrID0gKHRpbWU6IG51bWJlciwgXz86IG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSB0aW1lO1xuXHRcdH1cblx0fTtcblxuXHRwdWJsaWMgc2F2ZSA9ICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBpbiBsb2NhbC4uXCIpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fTtcblxuXHRwdWJsaWMgcHJlc2VudEZ1bGxzY3JlZW5QbGF5ZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0b3BlbkZ1bGxzY3JlZW4oZWxlbWVudCk7XG5cdFx0fVxuXHR9O1xuXG5cdHB1YmxpYyBkaXNtaXNzRnVsbHNjcmVlblBsYXllciA9ICgpID0+IHtcblx0XHRjbG9zZUZ1bGxzY3JlZW4oKTtcblx0fTtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW4sIHJhdGUsIHNlZWsgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRpZiAoZnVsbHNjcmVlbikge1xuXHRcdFx0XHRvcGVuRnVsbHNjcmVlbihlbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdGhpcy5fb25Qcm9ncmVzcyk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHRoaXMuX29uUHJvZ3Jlc3MpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Vla2luZ1wiLCB0aGlzLl9vblNlZWspO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5fb25FbmQpO1xuXG5cdFx0XHRpZiAocmF0ZSkge1xuXHRcdFx0XHRlbGVtZW50LnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWVrKSB7XG5cdFx0XHRcdHRoaXMuc2VlayhzZWVrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBWaWRlb1Byb3BlcnRpZXMpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW4sIHJhdGUsIHNlZWssIGN1cnJlbnRUaW1lLCBwYXVzZWQgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRpZiAoZnVsbHNjcmVlbiAhPT0gcHJldlByb3BzLmZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0aWYgKGZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0XHRvcGVuRnVsbHNjcmVlbihlbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbG9zZUZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmF0ZSAhPT0gcHJldlByb3BzLnJhdGUgJiYgcmF0ZSkge1xuXHRcdFx0XHRlbGVtZW50LnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cblx0XHRcdFx0aWYgKHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKHtcblx0XHRcdFx0XHRcdHBsYXliYWNrUmF0ZTogcmF0ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWVrICE9PSBwcmV2UHJvcHMuc2VlayAmJiBzZWVrKSB7XG5cdFx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSBzZWVrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3VycmVudFRpbWUgIT09IHByZXZQcm9wcy5jdXJyZW50VGltZSAmJiBjdXJyZW50VGltZSkge1xuXHRcdFx0XHRlbGVtZW50LmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXVzZWQgIT09IHByZXZQcm9wcy5wYXVzZWQgJiYgcGF1c2VkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKHBhdXNlZCkge1xuXHRcdFx0XHRcdGVsZW1lbnQucGF1c2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX29uUHJvZ3Jlc3MgPSAoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cblx0XHRpZiAodGhpcy5wcm9wcy5vblByb2dyZXNzKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uUHJvZ3Jlc3Moe1xuXHRcdFx0XHRjdXJyZW50VGltZTogZWxlbWVudCEuY3VycmVudFRpbWUsXG5cdFx0XHRcdC8vIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wLFxuXG5cdFx0XHRcdC8vIEB0b2RvIGFkZCBzdXBwb3J0IGZvciB0aGVzZSB2YWx1ZXNcblx0XHRcdFx0cGxheWFibGVEdXJhdGlvbjogMCxcblx0XHRcdFx0c2Vla2FibGVEdXJhdGlvbjogMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uTG9hZFN0YXJ0ID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uTG9hZFN0YXJ0KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uTG9hZFN0YXJ0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uTG9hZDogUmVhY3RFdmVudEhhbmRsZXI8SFRNTFZpZGVvRWxlbWVudD4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkxvYWQgJiYgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkxvYWQoe1xuXHRcdFx0XHRjYW5QbGF5RmFzdEZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlSZXZlcnNlOiB0cnVlLFxuXHRcdFx0XHRjYW5QbGF5U2xvd0ZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblN0ZXBCYWNrd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuU3RlcEZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlTbG93UmV2ZXJzZTogdHJ1ZSxcblx0XHRcdFx0Y3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cdFx0XHRcdGR1cmF0aW9uOiBlbGVtZW50LmR1cmF0aW9uLFxuXHRcdFx0XHRuYXR1cmFsU2l6ZToge1xuXHRcdFx0XHRcdGhlaWdodDogZWxlbWVudC52aWRlb0hlaWdodCxcblx0XHRcdFx0XHR3aWR0aDogZWxlbWVudC52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25FcnJvciA9IChlcnJvcjogYW55KSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25FcnJvcikge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVycm9yKHtcblx0XHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0XHRcIlwiOiBcIlwiLFxuXHRcdFx0XHRcdGVycm9yU3RyaW5nOlxuXHRcdFx0XHRcdFx0ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVuZXhwZWN0ZWQgZXJyb3JcIlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25TZWVrID0gKCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKHRoaXMucHJvcHMub25TZWVrICYmIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZWVrKHtcblx0XHRcdFx0Y3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cblx0XHRcdFx0Ly8gQHRvZG8gYWRkIHN1cHBvcnQgZm9yIHRoZXNlIHZhbHVlc1xuXHRcdFx0XHRzZWVrVGltZTogMCxcblx0XHRcdFx0dGFyZ2V0OiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25FbmQgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25FbmQpIHtcblx0XHRcdHRoaXMucHJvcHMub25FbmQoKTtcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdHZvbHVtZSxcblx0XHRcdG11dGVkLFxuXHRcdFx0cmVwZWF0LFxuXHRcdFx0Y29udHJvbHMsXG5cdFx0XHRwYXVzZWQsXG5cdFx0XHRzdHlsZSxcblx0XHRcdHBvc3RlclxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0e1xuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0XHRwYWRkaW5nVG9wOiBcIjU2LjI1JVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjcmVhdGVFbGVtZW50KFwidmlkZW9cIiwge1xuXHRcdFx0XHRyZWY6IHRoaXMuX3Jvb3QsXG5cdFx0XHRcdHNyYzogdGhpcy5fdXJsLFxuXHRcdFx0XHRvbkxvYWRTdGFydDogdGhpcy5fb25Mb2FkU3RhcnQsXG5cdFx0XHRcdG9uTG9hZGVkRGF0YTogdGhpcy5fb25Mb2FkLFxuXHRcdFx0XHRvbkVycm9yOiB0aGlzLl9vbkVycm9yLFxuXHRcdFx0XHRvblByb2dyZXNzOiB0aGlzLl9vblByb2dyZXNzLFxuXHRcdFx0XHRvblNlZWtpbmc6IHRoaXMuX29uU2Vlayxcblx0XHRcdFx0b25FbmRlZDogdGhpcy5fb25FbmQsXG5cdFx0XHRcdG9uTG9hZGVkTWV0YWRhdGE6IHRoaXMucHJvcHMub25UaW1lZE1ldGFkYXRhLFxuXHRcdFx0XHRvbkNhblBsYXk6IHRoaXMucHJvcHMub25SZWFkeUZvckRpc3BsYXksXG5cdFx0XHRcdG9uU3RhbGxlZDogdGhpcy5wcm9wcy5vblBsYXliYWNrU3RhbGxlZCxcblx0XHRcdFx0dm9sdW1lLFxuXHRcdFx0XHRjb250cm9scyxcblx0XHRcdFx0cGF1c2VkLFxuXHRcdFx0XHRtdXRlZCxcblx0XHRcdFx0bG9vcDogcmVwZWF0LFxuXHRcdFx0XHRhdXRvUGxheTogIXBhdXNlZCxcblx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcblx0XHRcdFx0XHQuLi5TdHlsZVNoZWV0LmZsYXR0ZW4oc3R5bGUpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBvc3Rlcixcblx0XHRcdFx0cGxheXNJbmxpbmU6IHRydWVcblx0XHRcdH0pXG5cdFx0KTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iXX0=