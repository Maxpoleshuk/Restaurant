window.onload=function(){var e,n;function l(){0<e?(window.scrollTo(0,e),e-=3,n=setTimeout(l,1)):(clearTimeout(n),window.scrollTo(0,0))}document.getElementById("up").onclick=function(){e=window.pageYOffset,l()}};var modal=document.getElementById("myModal"),btn=document.getElementById("myBtn"),span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")};var menu=document.getElementById("myMenu");menu.onclick=function(){"menu"===menu.className?menu.className+=" responsive":menu.className="menu"};var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var n,l=document.getElementsByClassName("mySlides"),s=document.getElementsByClassName("dot");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),n=0;n<l.length;n++)l[n].style.display="none";for(n=0;n<s.length;n++)s[n].className=s[n].className.replace("active","");l[slideIndex-1].style.display="block",s[slideIndex-1].className+="active"}showSlides(slideIndex);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwic2Nyb2xsZWQiLCJ0aW1lciIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJwYWdlWU9mZnNldCIsIm1vZGFsIiwiYnRuIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJldmVudCIsInRhcmdldCIsIm1lbnUiLCJjbGFzc05hbWUiLCJzbGlkZUluZGV4IiwicGx1c1NsaWRlcyIsIm4iLCJzaG93U2xpZGVzIiwiY3VycmVudFNsaWRlIiwiaSIsInNsaWRlcyIsImRvdHMiLCJsZW5ndGgiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFDQUEsT0FBT0MsT0FBUyxXQUVaLElBQUlDLEVBQ0FDLEVBU0osU0FBU0MsSUFDVSxFQUFYRixHQUNBRixPQUFPSyxTQUFTLEVBQUdILEdBQ25CQSxHQUFzQixFQUN0QkMsRUFBUUcsV0FBV0YsRUFBYSxLQUVoQ0csYUFBYUosR0FDYkgsT0FBT0ssU0FBUyxFQUFHLElBZDNCRyxTQUFTQyxlQUFlLE1BQU1DLFFBQVUsV0FDcENSLEVBQVdGLE9BQU9XLFlBRWxCUCxNQXlCUixJQUFJUSxNQUFRSixTQUFTQyxlQUFlLFdBQ2hDSSxJQUFNTCxTQUFTQyxlQUFlLFNBQzlCSyxLQUFPTixTQUFTTyx1QkFBdUIsU0FBUyxHQUNwREYsSUFBSUgsUUFBVSxXQUNWRSxNQUFNSSxNQUFNQyxRQUFVLFNBRTFCSCxLQUFLSixRQUFVLFdBQ1hFLE1BQU1JLE1BQU1DLFFBQVUsUUFFMUJqQixPQUFPVSxRQUFVLFNBQVVRLEdBQ25CQSxFQUFNQyxRQUFVUCxRQUNoQkEsTUFBTUksTUFBTUMsUUFBVSxTQU05QixJQUFJRyxLQUFPWixTQUFTQyxlQUFlLFVBQ25DVyxLQUFLVixRQUFVLFdBQ1ksU0FBbkJVLEtBQUtDLFVBQ0xELEtBQUtDLFdBQWEsY0FFbEJELEtBQUtDLFVBQVksUUFJekIsSUFBSUMsV0FBYSxFQUdqQixTQUFTQyxXQUFXQyxHQUNoQkMsV0FBV0gsWUFBY0UsR0FHN0IsU0FBU0UsYUFBYUYsR0FDbEJDLFdBQVdILFdBQWFFLEdBRzVCLFNBQVNDLFdBQVdELEdBQ2hCLElBQUlHLEVBQ0FDLEVBQVNwQixTQUFTTyx1QkFBdUIsWUFDekNjLEVBQU9yQixTQUFTTyx1QkFBdUIsT0FRM0MsSUFOSVMsRUFBSUksRUFBT0UsU0FDWFIsV0FBYSxHQUViRSxFQUFJLElBQ0pGLFdBQWFNLEVBQU9FLFFBRW5CSCxFQUFJLEVBQUdBLEVBQUlDLEVBQU9FLE9BQVFILElBQzNCQyxFQUFPRCxHQUFHWCxNQUFNQyxRQUFVLE9BRTlCLElBQUtVLEVBQUksRUFBR0EsRUFBSUUsRUFBS0MsT0FBUUgsSUFDekJFLEVBQUtGLEdBQUdOLFVBQVlRLEVBQUtGLEdBQUdOLFVBQVVVLFFBQVEsU0FBVSxJQUc1REgsRUFBT04sV0FBYSxHQUFHTixNQUFNQyxRQUFVLFFBQ3ZDWSxFQUFLUCxXQUFhLEdBQUdELFdBQWEsU0E3QnRDSSxXQUFXSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/QmtC90L7Qv9C60LAg0LLQstC10YDRhVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzY3JvbGxlZDtcclxuICAgIHZhciB0aW1lcjtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXAnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgICAgICBzY3JvbGxUb1RvcCgpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IDApIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbGVkKTtcclxuICAgICAgICAgICAgc2Nyb2xsZWQgPSBzY3JvbGxlZCAtIDM7IC8v0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QutGA0YPRgtC60LhcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHNjcm9sbFRvVG9wLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGlmIChzY3JvbGxlZCA+IDMwMCkge1xyXG4gICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXAnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuXHJcbi8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvlxyXG52YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xyXG52YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUJ0blwiKTtcclxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcbmJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL9Cc0LXQvdGOXHJcblxyXG52YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1lbnUnKTtcclxubWVudS5vbmNsaWNrID0gZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgICBpZiAobWVudS5jbGFzc05hbWUgPT09IFwibWVudVwiKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc05hbWUgKz0gXCIgcmVzcG9uc2l2ZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LmNsYXNzTmFtZSA9ICdtZW51JztcclxuICAgIH1cclxufVxyXG4vL9Ca0LDRgNGD0YHQtdC70YxcclxudmFyIHNsaWRlSW5kZXggPSAxO1xyXG5zaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG5cclxuZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1cnJlbnRTbGlkZShuKSB7XHJcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkb3RcIik7XHJcblxyXG4gICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgc2xpZGVJbmRleCA9IDFcclxuICAgIH1cclxuICAgIGlmIChuIDwgMSkge1xyXG4gICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoXHJcbiAgICB9XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZlXCIsIFwiXCIpO1xyXG5cclxuICAgIH1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvdHNbc2xpZGVJbmRleCAtIDFdLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG59Il19
