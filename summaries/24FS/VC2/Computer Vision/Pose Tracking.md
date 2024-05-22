# Pose Tracking

## Decision Tree Forest

![image-20240513144036620](./res/Pose%20Tracking/image-20240513144036620.png)

Using Decision Forests are quick and the resulting algorithm works well. The Kinect, for example, does the same thing.

## Top Down

![image-20240513145346400](./res/Pose%20Tracking/image-20240513145346400.png)

When doing it top down, first bounding boxes of people are found. Then, in those bounding boxes, the poses are detected. 

However, this approach is slow and has problems with occluded body parts.

## Bottom Up

![image-20240513145440821](./res/Pose%20Tracking/image-20240513145440821.png)

In this approach, first the joints are detected. Then, holistically, the joints can be connected.

This is a lot quicker and is the approach which is used today. Furthermore, the bottom up approach has less issues with occluded body parts.