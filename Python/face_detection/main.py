# import the modules 
import cv2
import sys 
# import the cascade classifier 
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
# start capturing the video
video_capture = cv2.VideoCapture(0)

while True:
    ret, frame = video_capture.read() # capture the frame 
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY) # convert color image to gray image 

    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30,30)) # detect the image in frame
    
    # draw a rectangle over the face  
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0,255,0), 2)
    
    # display the frame 
    cv2.imshow('video', frame)
    # if keyboard interupted then it will close the video
    if cv2.waitKey(1) & 0xff == ord('q'):
        break
# stop capturing the video 
video_capture.release()
# destroy the gui window
cv2.destroyAllWindows()
