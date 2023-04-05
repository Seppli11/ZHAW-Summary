### DB-SCAN

DB-SCAN categorizes each point as:

* **Core Point**
  A point with at least $minPts$ within the distance $\varepsilon$ from itself

* **Border Point**

  A point with at least one core point within the distance $\varepsilon$ of itself

* **Noise Point**
  A point which is neither a core point or border point

The algorithm does the following steps:

1. Select an unprocessed data point $P$ and retreive all points within $\varepsilon$
2. If the amount of points found is grater or equal to $minPts$, then
   1. then mark as core point
   2. 



* A smaller $\varepsilon$ leads to more points marked as noise
* A smaller $minPts$ leads to more clusters 

The runtime complexity is $O(m \cdot \log m)\approx O(m^2)$.

* Advantages
  * No need to specify the number of cluster in advance
  * Able to find arbitrarily shaped cluster
  * Is able to detect noise
* Disadvantages
  * Cannot cluster data sets well large differences in densities as the $\varepsilon$ and $minPts$ would have to change for each densitiy reagion. (An improved version, which addresses this issue, is named OPTICS)