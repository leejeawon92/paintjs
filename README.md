# 프로젝트 샘플
### Canvas와 event를 이용하여 마우스로 그림을 그리고 굵기도 조절할 수 있으며 다 그린 이후에는 localhost에 저장도 할 수 있습니다.

![paint_sample](https://user-images.githubusercontent.com/73148498/166660320-d476d1a0-d226-4d1a-bca5-c737a5771fc4.gif)


# 주요 기술
* HTML
  * Canvas 
  * 
* Javascript
  * mousemove / mousedown /mouseup / mouseleave /click / contextmenu 이벤트 사용하여 필요 이벤트감지를 감지하였습니다.
  * beginPath() / moveTo() / lineTo() / stroke() 함수를 이용하여 그림을 그릴때 사용하였습니다.
  * png타입의 base64인코딩된 data url 형식의 문자열을 반환 toDataURL() 를 사용하여 이미지 저장하는데 사용하였습니다.

