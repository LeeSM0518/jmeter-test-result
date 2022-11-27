/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 292.0, "series": [{"data": [[0.0, 9.0], [0.1, 19.0], [0.2, 26.0], [0.3, 27.0], [0.4, 30.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 39.0], [7.0, 39.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 40.0], [8.7, 40.0], [8.8, 40.0], [8.9, 40.0], [9.0, 40.0], [9.1, 40.0], [9.2, 40.0], [9.3, 40.0], [9.4, 40.0], [9.5, 41.0], [9.6, 41.0], [9.7, 41.0], [9.8, 41.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 41.0], [10.4, 41.0], [10.5, 41.0], [10.6, 41.0], [10.7, 41.0], [10.8, 41.0], [10.9, 41.0], [11.0, 41.0], [11.1, 41.0], [11.2, 41.0], [11.3, 41.0], [11.4, 41.0], [11.5, 41.0], [11.6, 41.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 42.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 43.0], [14.7, 43.0], [14.8, 43.0], [14.9, 43.0], [15.0, 43.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 43.0], [16.6, 43.0], [16.7, 43.0], [16.8, 43.0], [16.9, 43.0], [17.0, 43.0], [17.1, 43.0], [17.2, 43.0], [17.3, 43.0], [17.4, 44.0], [17.5, 44.0], [17.6, 44.0], [17.7, 44.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 44.0], [19.1, 44.0], [19.2, 44.0], [19.3, 44.0], [19.4, 44.0], [19.5, 44.0], [19.6, 44.0], [19.7, 44.0], [19.8, 44.0], [19.9, 44.0], [20.0, 44.0], [20.1, 44.0], [20.2, 44.0], [20.3, 44.0], [20.4, 44.0], [20.5, 45.0], [20.6, 45.0], [20.7, 45.0], [20.8, 45.0], [20.9, 45.0], [21.0, 45.0], [21.1, 45.0], [21.2, 45.0], [21.3, 45.0], [21.4, 45.0], [21.5, 45.0], [21.6, 45.0], [21.7, 45.0], [21.8, 45.0], [21.9, 45.0], [22.0, 45.0], [22.1, 45.0], [22.2, 45.0], [22.3, 45.0], [22.4, 45.0], [22.5, 45.0], [22.6, 45.0], [22.7, 45.0], [22.8, 45.0], [22.9, 45.0], [23.0, 45.0], [23.1, 45.0], [23.2, 45.0], [23.3, 45.0], [23.4, 45.0], [23.5, 45.0], [23.6, 45.0], [23.7, 45.0], [23.8, 45.0], [23.9, 45.0], [24.0, 45.0], [24.1, 46.0], [24.2, 46.0], [24.3, 46.0], [24.4, 46.0], [24.5, 46.0], [24.6, 46.0], [24.7, 46.0], [24.8, 46.0], [24.9, 46.0], [25.0, 46.0], [25.1, 46.0], [25.2, 46.0], [25.3, 46.0], [25.4, 46.0], [25.5, 46.0], [25.6, 46.0], [25.7, 46.0], [25.8, 46.0], [25.9, 46.0], [26.0, 46.0], [26.1, 46.0], [26.2, 46.0], [26.3, 46.0], [26.4, 46.0], [26.5, 46.0], [26.6, 46.0], [26.7, 46.0], [26.8, 46.0], [26.9, 46.0], [27.0, 46.0], [27.1, 46.0], [27.2, 46.0], [27.3, 46.0], [27.4, 47.0], [27.5, 47.0], [27.6, 47.0], [27.7, 47.0], [27.8, 47.0], [27.9, 47.0], [28.0, 47.0], [28.1, 47.0], [28.2, 47.0], [28.3, 47.0], [28.4, 47.0], [28.5, 47.0], [28.6, 47.0], [28.7, 47.0], [28.8, 47.0], [28.9, 47.0], [29.0, 47.0], [29.1, 47.0], [29.2, 47.0], [29.3, 47.0], [29.4, 47.0], [29.5, 47.0], [29.6, 47.0], [29.7, 47.0], [29.8, 47.0], [29.9, 47.0], [30.0, 47.0], [30.1, 47.0], [30.2, 47.0], [30.3, 47.0], [30.4, 47.0], [30.5, 47.0], [30.6, 47.0], [30.7, 47.0], [30.8, 47.0], [30.9, 47.0], [31.0, 47.0], [31.1, 47.0], [31.2, 47.0], [31.3, 47.0], [31.4, 47.0], [31.5, 47.0], [31.6, 48.0], [31.7, 48.0], [31.8, 48.0], [31.9, 48.0], [32.0, 48.0], [32.1, 48.0], [32.2, 48.0], [32.3, 48.0], [32.4, 48.0], [32.5, 48.0], [32.6, 48.0], [32.7, 48.0], [32.8, 48.0], [32.9, 48.0], [33.0, 48.0], [33.1, 48.0], [33.2, 48.0], [33.3, 48.0], [33.4, 48.0], [33.5, 48.0], [33.6, 48.0], [33.7, 48.0], [33.8, 48.0], [33.9, 48.0], [34.0, 48.0], [34.1, 48.0], [34.2, 48.0], [34.3, 48.0], [34.4, 48.0], [34.5, 48.0], [34.6, 48.0], [34.7, 48.0], [34.8, 48.0], [34.9, 48.0], [35.0, 48.0], [35.1, 48.0], [35.2, 48.0], [35.3, 48.0], [35.4, 48.0], [35.5, 48.0], [35.6, 48.0], [35.7, 48.0], [35.8, 48.0], [35.9, 49.0], [36.0, 49.0], [36.1, 49.0], [36.2, 49.0], [36.3, 49.0], [36.4, 49.0], [36.5, 49.0], [36.6, 49.0], [36.7, 49.0], [36.8, 49.0], [36.9, 49.0], [37.0, 49.0], [37.1, 49.0], [37.2, 49.0], [37.3, 49.0], [37.4, 49.0], [37.5, 49.0], [37.6, 49.0], [37.7, 49.0], [37.8, 49.0], [37.9, 49.0], [38.0, 49.0], [38.1, 49.0], [38.2, 49.0], [38.3, 49.0], [38.4, 49.0], [38.5, 49.0], [38.6, 49.0], [38.7, 49.0], [38.8, 49.0], [38.9, 49.0], [39.0, 49.0], [39.1, 49.0], [39.2, 49.0], [39.3, 49.0], [39.4, 49.0], [39.5, 49.0], [39.6, 49.0], [39.7, 49.0], [39.8, 49.0], [39.9, 49.0], [40.0, 49.0], [40.1, 49.0], [40.2, 49.0], [40.3, 49.0], [40.4, 50.0], [40.5, 50.0], [40.6, 50.0], [40.7, 50.0], [40.8, 50.0], [40.9, 50.0], [41.0, 50.0], [41.1, 50.0], [41.2, 50.0], [41.3, 50.0], [41.4, 50.0], [41.5, 50.0], [41.6, 50.0], [41.7, 50.0], [41.8, 50.0], [41.9, 50.0], [42.0, 50.0], [42.1, 50.0], [42.2, 50.0], [42.3, 50.0], [42.4, 50.0], [42.5, 50.0], [42.6, 50.0], [42.7, 50.0], [42.8, 50.0], [42.9, 50.0], [43.0, 50.0], [43.1, 50.0], [43.2, 50.0], [43.3, 50.0], [43.4, 50.0], [43.5, 50.0], [43.6, 50.0], [43.7, 50.0], [43.8, 50.0], [43.9, 50.0], [44.0, 50.0], [44.1, 50.0], [44.2, 50.0], [44.3, 50.0], [44.4, 50.0], [44.5, 51.0], [44.6, 51.0], [44.7, 51.0], [44.8, 51.0], [44.9, 51.0], [45.0, 51.0], [45.1, 51.0], [45.2, 51.0], [45.3, 51.0], [45.4, 51.0], [45.5, 51.0], [45.6, 51.0], [45.7, 51.0], [45.8, 51.0], [45.9, 51.0], [46.0, 51.0], [46.1, 51.0], [46.2, 51.0], [46.3, 51.0], [46.4, 51.0], [46.5, 51.0], [46.6, 51.0], [46.7, 51.0], [46.8, 51.0], [46.9, 51.0], [47.0, 51.0], [47.1, 51.0], [47.2, 51.0], [47.3, 51.0], [47.4, 51.0], [47.5, 51.0], [47.6, 51.0], [47.7, 51.0], [47.8, 51.0], [47.9, 51.0], [48.0, 51.0], [48.1, 51.0], [48.2, 51.0], [48.3, 51.0], [48.4, 51.0], [48.5, 51.0], [48.6, 51.0], [48.7, 51.0], [48.8, 51.0], [48.9, 51.0], [49.0, 52.0], [49.1, 52.0], [49.2, 52.0], [49.3, 52.0], [49.4, 52.0], [49.5, 52.0], [49.6, 52.0], [49.7, 52.0], [49.8, 52.0], [49.9, 52.0], [50.0, 52.0], [50.1, 52.0], [50.2, 52.0], [50.3, 52.0], [50.4, 52.0], [50.5, 52.0], [50.6, 52.0], [50.7, 52.0], [50.8, 52.0], [50.9, 52.0], [51.0, 52.0], [51.1, 52.0], [51.2, 52.0], [51.3, 52.0], [51.4, 52.0], [51.5, 52.0], [51.6, 52.0], [51.7, 52.0], [51.8, 52.0], [51.9, 52.0], [52.0, 52.0], [52.1, 52.0], [52.2, 52.0], [52.3, 52.0], [52.4, 52.0], [52.5, 52.0], [52.6, 52.0], [52.7, 52.0], [52.8, 52.0], [52.9, 52.0], [53.0, 52.0], [53.1, 53.0], [53.2, 53.0], [53.3, 53.0], [53.4, 53.0], [53.5, 53.0], [53.6, 53.0], [53.7, 53.0], [53.8, 53.0], [53.9, 53.0], [54.0, 53.0], [54.1, 53.0], [54.2, 53.0], [54.3, 53.0], [54.4, 53.0], [54.5, 53.0], [54.6, 53.0], [54.7, 53.0], [54.8, 53.0], [54.9, 53.0], [55.0, 53.0], [55.1, 53.0], [55.2, 53.0], [55.3, 53.0], [55.4, 53.0], [55.5, 53.0], [55.6, 53.0], [55.7, 53.0], [55.8, 53.0], [55.9, 53.0], [56.0, 53.0], [56.1, 53.0], [56.2, 53.0], [56.3, 53.0], [56.4, 53.0], [56.5, 53.0], [56.6, 53.0], [56.7, 53.0], [56.8, 54.0], [56.9, 54.0], [57.0, 54.0], [57.1, 54.0], [57.2, 54.0], [57.3, 54.0], [57.4, 54.0], [57.5, 54.0], [57.6, 54.0], [57.7, 54.0], [57.8, 54.0], [57.9, 54.0], [58.0, 54.0], [58.1, 54.0], [58.2, 54.0], [58.3, 54.0], [58.4, 54.0], [58.5, 54.0], [58.6, 54.0], [58.7, 54.0], [58.8, 54.0], [58.9, 54.0], [59.0, 54.0], [59.1, 54.0], [59.2, 54.0], [59.3, 54.0], [59.4, 54.0], [59.5, 54.0], [59.6, 54.0], [59.7, 54.0], [59.8, 54.0], [59.9, 54.0], [60.0, 54.0], [60.1, 54.0], [60.2, 55.0], [60.3, 55.0], [60.4, 55.0], [60.5, 55.0], [60.6, 55.0], [60.7, 55.0], [60.8, 55.0], [60.9, 55.0], [61.0, 55.0], [61.1, 55.0], [61.2, 55.0], [61.3, 55.0], [61.4, 55.0], [61.5, 55.0], [61.6, 55.0], [61.7, 55.0], [61.8, 55.0], [61.9, 55.0], [62.0, 55.0], [62.1, 55.0], [62.2, 55.0], [62.3, 55.0], [62.4, 55.0], [62.5, 55.0], [62.6, 55.0], [62.7, 55.0], [62.8, 55.0], [62.9, 55.0], [63.0, 55.0], [63.1, 55.0], [63.2, 55.0], [63.3, 55.0], [63.4, 55.0], [63.5, 55.0], [63.6, 55.0], [63.7, 55.0], [63.8, 55.0], [63.9, 55.0], [64.0, 55.0], [64.1, 55.0], [64.2, 56.0], [64.3, 56.0], [64.4, 56.0], [64.5, 56.0], [64.6, 56.0], [64.7, 56.0], [64.8, 56.0], [64.9, 56.0], [65.0, 56.0], [65.1, 56.0], [65.2, 56.0], [65.3, 56.0], [65.4, 56.0], [65.5, 56.0], [65.6, 56.0], [65.7, 56.0], [65.8, 56.0], [65.9, 56.0], [66.0, 56.0], [66.1, 56.0], [66.2, 56.0], [66.3, 56.0], [66.4, 56.0], [66.5, 56.0], [66.6, 56.0], [66.7, 56.0], [66.8, 56.0], [66.9, 56.0], [67.0, 56.0], [67.1, 56.0], [67.2, 56.0], [67.3, 56.0], [67.4, 56.0], [67.5, 56.0], [67.6, 56.0], [67.7, 56.0], [67.8, 57.0], [67.9, 57.0], [68.0, 57.0], [68.1, 57.0], [68.2, 57.0], [68.3, 57.0], [68.4, 57.0], [68.5, 57.0], [68.6, 57.0], [68.7, 57.0], [68.8, 57.0], [68.9, 57.0], [69.0, 57.0], [69.1, 57.0], [69.2, 57.0], [69.3, 57.0], [69.4, 57.0], [69.5, 57.0], [69.6, 57.0], [69.7, 57.0], [69.8, 57.0], [69.9, 57.0], [70.0, 57.0], [70.1, 57.0], [70.2, 57.0], [70.3, 57.0], [70.4, 57.0], [70.5, 57.0], [70.6, 57.0], [70.7, 58.0], [70.8, 58.0], [70.9, 58.0], [71.0, 58.0], [71.1, 58.0], [71.2, 58.0], [71.3, 58.0], [71.4, 58.0], [71.5, 58.0], [71.6, 58.0], [71.7, 58.0], [71.8, 58.0], [71.9, 58.0], [72.0, 58.0], [72.1, 58.0], [72.2, 58.0], [72.3, 58.0], [72.4, 58.0], [72.5, 58.0], [72.6, 58.0], [72.7, 58.0], [72.8, 58.0], [72.9, 58.0], [73.0, 58.0], [73.1, 58.0], [73.2, 58.0], [73.3, 58.0], [73.4, 58.0], [73.5, 59.0], [73.6, 59.0], [73.7, 59.0], [73.8, 59.0], [73.9, 59.0], [74.0, 59.0], [74.1, 59.0], [74.2, 59.0], [74.3, 59.0], [74.4, 59.0], [74.5, 59.0], [74.6, 59.0], [74.7, 59.0], [74.8, 59.0], [74.9, 59.0], [75.0, 59.0], [75.1, 59.0], [75.2, 59.0], [75.3, 59.0], [75.4, 59.0], [75.5, 59.0], [75.6, 59.0], [75.7, 59.0], [75.8, 59.0], [75.9, 59.0], [76.0, 60.0], [76.1, 60.0], [76.2, 60.0], [76.3, 60.0], [76.4, 60.0], [76.5, 60.0], [76.6, 60.0], [76.7, 60.0], [76.8, 60.0], [76.9, 60.0], [77.0, 60.0], [77.1, 60.0], [77.2, 60.0], [77.3, 60.0], [77.4, 60.0], [77.5, 60.0], [77.6, 60.0], [77.7, 60.0], [77.8, 60.0], [77.9, 60.0], [78.0, 60.0], [78.1, 60.0], [78.2, 61.0], [78.3, 61.0], [78.4, 61.0], [78.5, 61.0], [78.6, 61.0], [78.7, 61.0], [78.8, 61.0], [78.9, 61.0], [79.0, 61.0], [79.1, 61.0], [79.2, 61.0], [79.3, 61.0], [79.4, 61.0], [79.5, 61.0], [79.6, 61.0], [79.7, 61.0], [79.8, 61.0], [79.9, 61.0], [80.0, 61.0], [80.1, 61.0], [80.2, 61.0], [80.3, 61.0], [80.4, 61.0], [80.5, 62.0], [80.6, 62.0], [80.7, 62.0], [80.8, 62.0], [80.9, 62.0], [81.0, 62.0], [81.1, 62.0], [81.2, 62.0], [81.3, 62.0], [81.4, 62.0], [81.5, 62.0], [81.6, 62.0], [81.7, 62.0], [81.8, 62.0], [81.9, 62.0], [82.0, 62.0], [82.1, 62.0], [82.2, 62.0], [82.3, 62.0], [82.4, 63.0], [82.5, 63.0], [82.6, 63.0], [82.7, 63.0], [82.8, 63.0], [82.9, 63.0], [83.0, 63.0], [83.1, 63.0], [83.2, 63.0], [83.3, 63.0], [83.4, 63.0], [83.5, 63.0], [83.6, 63.0], [83.7, 63.0], [83.8, 63.0], [83.9, 63.0], [84.0, 63.0], [84.1, 63.0], [84.2, 64.0], [84.3, 64.0], [84.4, 64.0], [84.5, 64.0], [84.6, 64.0], [84.7, 64.0], [84.8, 64.0], [84.9, 64.0], [85.0, 64.0], [85.1, 64.0], [85.2, 64.0], [85.3, 64.0], [85.4, 64.0], [85.5, 64.0], [85.6, 64.0], [85.7, 64.0], [85.8, 64.0], [85.9, 65.0], [86.0, 65.0], [86.1, 65.0], [86.2, 65.0], [86.3, 65.0], [86.4, 65.0], [86.5, 65.0], [86.6, 65.0], [86.7, 65.0], [86.8, 65.0], [86.9, 65.0], [87.0, 65.0], [87.1, 65.0], [87.2, 65.0], [87.3, 66.0], [87.4, 66.0], [87.5, 66.0], [87.6, 66.0], [87.7, 66.0], [87.8, 66.0], [87.9, 66.0], [88.0, 66.0], [88.1, 66.0], [88.2, 66.0], [88.3, 66.0], [88.4, 66.0], [88.5, 66.0], [88.6, 67.0], [88.7, 67.0], [88.8, 67.0], [88.9, 67.0], [89.0, 67.0], [89.1, 67.0], [89.2, 67.0], [89.3, 67.0], [89.4, 67.0], [89.5, 67.0], [89.6, 67.0], [89.7, 67.0], [89.8, 67.0], [89.9, 68.0], [90.0, 68.0], [90.1, 68.0], [90.2, 68.0], [90.3, 68.0], [90.4, 68.0], [90.5, 68.0], [90.6, 68.0], [90.7, 68.0], [90.8, 69.0], [90.9, 69.0], [91.0, 69.0], [91.1, 69.0], [91.2, 69.0], [91.3, 69.0], [91.4, 69.0], [91.5, 69.0], [91.6, 70.0], [91.7, 70.0], [91.8, 70.0], [91.9, 70.0], [92.0, 70.0], [92.1, 70.0], [92.2, 70.0], [92.3, 70.0], [92.4, 71.0], [92.5, 71.0], [92.6, 71.0], [92.7, 71.0], [92.8, 71.0], [92.9, 71.0], [93.0, 71.0], [93.1, 72.0], [93.2, 72.0], [93.3, 72.0], [93.4, 72.0], [93.5, 72.0], [93.6, 73.0], [93.7, 73.0], [93.8, 73.0], [93.9, 73.0], [94.0, 73.0], [94.1, 73.0], [94.2, 73.0], [94.3, 74.0], [94.4, 74.0], [94.5, 74.0], [94.6, 74.0], [94.7, 75.0], [94.8, 75.0], [94.9, 75.0], [95.0, 75.0], [95.1, 76.0], [95.2, 76.0], [95.3, 76.0], [95.4, 76.0], [95.5, 77.0], [95.6, 77.0], [95.7, 77.0], [95.8, 78.0], [95.9, 78.0], [96.0, 78.0], [96.1, 79.0], [96.2, 79.0], [96.3, 80.0], [96.4, 80.0], [96.5, 81.0], [96.6, 81.0], [96.7, 82.0], [96.8, 83.0], [96.9, 83.0], [97.0, 84.0], [97.1, 85.0], [97.2, 86.0], [97.3, 86.0], [97.4, 87.0], [97.5, 88.0], [97.6, 89.0], [97.7, 91.0], [97.8, 92.0], [97.9, 94.0], [98.0, 96.0], [98.1, 97.0], [98.2, 99.0], [98.3, 101.0], [98.4, 104.0], [98.5, 107.0], [98.6, 110.0], [98.7, 113.0], [98.8, 115.0], [98.9, 117.0], [99.0, 118.0], [99.1, 121.0], [99.2, 129.0], [99.3, 140.0], [99.4, 151.0], [99.5, 163.0], [99.6, 176.0], [99.7, 184.0], [99.8, 200.0], [99.9, 210.0], [100.0, 292.0]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 9823.0, "series": [{"data": [[0.0, 9823.0], [100.0, 156.0], [200.0, 21.0]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10000.0, "series": [{"data": [[0.0, 10000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 218.57710000000026, "minX": 1.66956276E12, "maxY": 218.57710000000026, "series": [{"data": [[1.66956276E12, 218.57710000000026]], "isOverall": false, "label": "client-to-gateway-non-caching (POST)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956276E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 137.1636363636363, "series": [{"data": [[2.0, 17.0], [3.0, 22.5], [4.0, 26.0], [5.0, 26.0], [7.0, 23.5], [8.0, 20.0], [10.0, 22.5], [11.0, 17.0], [12.0, 27.0], [13.0, 26.0], [14.0, 25.5], [15.0, 26.0], [17.0, 24.0], [18.0, 22.0], [19.0, 30.0], [20.0, 46.0], [21.0, 45.0], [22.0, 48.0], [23.0, 45.0], [25.0, 37.5], [26.0, 42.5], [29.0, 39.0], [33.0, 38.0], [32.0, 37.6], [35.0, 40.0], [34.0, 38.666666666666664], [37.0, 38.0], [39.0, 46.0], [38.0, 32.0], [41.0, 42.666666666666664], [40.0, 43.5], [43.0, 34.0], [42.0, 44.5], [45.0, 40.75], [44.0, 40.0], [46.0, 42.0], [49.0, 41.333333333333336], [48.0, 42.0], [51.0, 45.0], [50.0, 44.333333333333336], [53.0, 36.0], [52.0, 43.5], [55.0, 42.5], [54.0, 42.0], [59.0, 53.1], [58.0, 46.333333333333336], [61.0, 48.5], [60.0, 55.5], [63.0, 54.0], [62.0, 48.25], [67.0, 51.0], [66.0, 62.5], [65.0, 47.0], [71.0, 46.333333333333336], [70.0, 45.2], [69.0, 52.25], [74.0, 60.0], [73.0, 56.0], [79.0, 47.0], [77.0, 56.6], [76.0, 54.14285714285714], [83.0, 48.0], [82.0, 46.5], [81.0, 50.0], [80.0, 58.25], [86.0, 44.5], [85.0, 43.0], [84.0, 41.375], [89.0, 44.8], [88.0, 46.0], [94.0, 45.666666666666664], [93.0, 49.0], [92.0, 43.0], [98.0, 45.5], [99.0, 47.5], [97.0, 44.5], [96.0, 48.0], [103.0, 40.81818181818183], [102.0, 41.404761904761905], [101.0, 44.333333333333336], [100.0, 41.5], [107.0, 42.89743589743589], [106.0, 39.38461538461539], [104.0, 38.58536585365853], [105.0, 38.14814814814815], [111.0, 45.15789473684211], [110.0, 44.78571428571429], [109.0, 41.52941176470588], [108.0, 41.206896551724135], [115.0, 42.888888888888886], [114.0, 48.07692307692307], [113.0, 46.4], [112.0, 49.2], [118.0, 72.85714285714283], [117.0, 46.25], [116.0, 41.55555555555556], [119.0, 49.1], [121.0, 51.64705882352941], [122.0, 45.80769230769231], [123.0, 56.67857142857143], [120.0, 47.756097560975604], [124.0, 56.11764705882353], [125.0, 46.66666666666667], [126.0, 105.5384615384615], [127.0, 86.06451612903226], [128.0, 137.1636363636363], [129.0, 96.03571428571429], [132.0, 72.48148148148147], [131.0, 70.0], [130.0, 49.11111111111111], [135.0, 57.42857142857143], [133.0, 55.294117647058826], [134.0, 45.333333333333336], [138.0, 57.666666666666664], [139.0, 48.413793103448285], [140.0, 47.441176470588246], [141.0, 57.75], [142.0, 74.625], [137.0, 44.0625], [136.0, 44.37499999999999], [144.0, 49.57894736842104], [145.0, 50.300000000000004], [146.0, 71.02564102564102], [147.0, 80.23880597014926], [148.0, 81.5], [149.0, 57.03125], [150.0, 61.82758620689654], [151.0, 45.0], [153.0, 50.20454545454545], [154.0, 54.095744680851055], [155.0, 58.0], [156.0, 52.411764705882355], [158.0, 51.35714285714286], [159.0, 56.966666666666654], [152.0, 54.6], [157.0, 40.25], [160.0, 51.035714285714285], [161.0, 46.70238095238095], [163.0, 48.612903225806456], [164.0, 52.40677966101695], [166.0, 46.578947368421055], [167.0, 49.579710144927546], [162.0, 46.0], [165.0, 52.388888888888914], [168.0, 48.75581395348838], [170.0, 45.28125], [171.0, 47.74117647058823], [172.0, 48.577777777777776], [174.0, 49.19354838709676], [175.0, 53.333333333333336], [169.0, 48.111111111111114], [173.0, 51.38461538461538], [177.0, 52.17241379310345], [178.0, 48.042553191489354], [179.0, 53.5], [180.0, 47.47663551401869], [181.0, 45.41176470588235], [182.0, 49.82978723404255], [183.0, 53.61904761904763], [176.0, 60.4], [185.0, 57.026666666666664], [186.0, 54.164893617021285], [184.0, 56.64444444444444], [187.0, 101.22000000000001], [188.0, 48.7], [189.0, 47.92307692307693], [190.0, 62.12903225806452], [191.0, 50.42307692307692], [196.0, 43.66666666666667], [197.0, 49.6056338028169], [198.0, 62.96491228070177], [199.0, 58.426470588235304], [193.0, 60.833333333333336], [192.0, 63.57692307692308], [195.0, 53.08474576271189], [194.0, 53.50000000000001], [200.0, 55.436619718309856], [201.0, 51.37719298245612], [202.0, 53.48837209302325], [207.0, 54.009803921568626], [206.0, 53.430379746835435], [205.0, 56.53211009174311], [203.0, 56.14705882352941], [204.0, 60.518518518518505], [208.0, 49.60000000000001], [209.0, 54.52941176470589], [212.0, 66.76470588235294], [211.0, 48.37500000000001], [210.0, 49.42857142857142], [213.0, 53.66666666666667], [215.0, 45.714285714285715], [214.0, 54.1764705882353], [219.0, 54.896551724137936], [218.0, 55.047619047619044], [223.0, 49.99999999999999], [222.0, 49.0], [220.0, 57.00000000000001], [217.0, 67.18181818181817], [216.0, 45.125], [227.0, 54.76315789473684], [231.0, 54.97260273972602], [230.0, 55.591160220994496], [229.0, 56.77477477477475], [228.0, 53.905263157894744], [226.0, 58.666666666666664], [224.0, 54.12499999999999], [225.0, 56.42105263157895], [233.0, 55.44155844155844], [232.0, 50.53846153846155], [234.0, 55.15533980582524], [235.0, 54.24999999999999], [236.0, 56.31034482758621], [237.0, 55.36363636363635], [239.0, 51.87692307692309], [238.0, 51.281690140845086], [240.0, 56.032258064516135], [242.0, 53.08219178082193], [241.0, 53.82456140350878], [243.0, 48.56666666666667], [244.0, 57.3162393162393], [247.0, 57.64999999999999], [246.0, 52.03124999999999], [245.0, 52.29608938547488], [251.0, 53.148148148148145], [250.0, 54.0], [249.0, 53.80555555555554], [248.0, 52.82926829268292], [253.0, 50.074074074074076], [252.0, 55.14285714285714], [254.0, 51.22222222222222], [255.0, 49.0], [258.0, 53.02666666666667], [261.0, 54.78571428571428], [260.0, 50.04761904761904], [259.0, 54.990654205607484], [256.0, 55.305555555555536], [263.0, 54.67692307692308], [262.0, 55.41176470588234], [257.0, 55.05263157894738], [267.0, 52.0], [266.0, 55.32894736842106], [265.0, 49.8433734939759], [271.0, 52.53846153846155], [264.0, 52.02941176470587], [268.0, 54.146341463414636], [269.0, 53.06363636363637], [270.0, 57.058823529411775], [274.0, 48.09374999999999], [277.0, 50.52499999999998], [276.0, 50.341176470588245], [275.0, 49.01886792452831], [284.0, 55.84146341463415], [285.0, 58.275], [287.0, 62.202898550724626], [286.0, 56.43548387096772], [273.0, 52.57575757575756], [272.0, 56.166666666666664], [279.0, 52.284210526315796], [278.0, 49.42268041237114], [280.0, 52.47115384615383], [282.0, 54.342857142857156], [283.0, 55.944444444444464], [281.0, 53.53521126760563], [288.0, 52.76190476190475], [291.0, 55.1], [301.0, 57.1578947368421], [300.0, 58.85227272727274], [303.0, 59.54929577464789], [302.0, 55.14084507042253], [290.0, 59.911764705882355], [289.0, 61.736111111111114], [293.0, 74.85294117647062], [292.0, 63.3709677419355], [296.0, 55.47872340425533], [297.0, 56.58536585365853], [299.0, 56.875], [298.0, 57.716981132075496], [295.0, 59.70212765957447], [294.0, 56.21052631578947], [305.0, 56.79310344827588], [304.0, 54.92307692307693], [306.0, 55.13636363636364], [310.0, 53.0], [309.0, 53.107142857142854], [308.0, 54.57142857142858], [307.0, 52.23684210526314], [1.0, 19.0]], "isOverall": false, "label": "Microservice-based client", "isController": false}, {"data": [[218.5771999999998, 54.44779999999998]], "isOverall": false, "label": "Microservice-based client-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 310.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 22333.333333333332, "minX": 1.66956276E12, "maxY": 40500.0, "series": [{"data": [[1.66956276E12, 22333.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66956276E12, 40500.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956276E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 54.44779999999998, "minX": 1.66956276E12, "maxY": 54.44779999999998, "series": [{"data": [[1.66956276E12, 54.44779999999998]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956276E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 54.420999999999836, "minX": 1.66956276E12, "maxY": 54.420999999999836, "series": [{"data": [[1.66956276E12, 54.420999999999836]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956276E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.7917999999999961, "minX": 1.66956276E12, "maxY": 0.7917999999999961, "series": [{"data": [[1.66956276E12, 0.7917999999999961]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956276E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 9.0, "minX": 1.66956276E12, "maxY": 292.0, "series": [{"data": [[1.66956276E12, 292.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66956276E12, 68.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66956276E12, 118.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66956276E12, 75.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66956276E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66956276E12, 52.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956276E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 42.5, "minX": 126.0, "maxY": 52.0, "series": [{"data": [[4580.0, 52.0], [1779.0, 51.0], [3515.0, 52.0], [126.0, 42.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4580.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 42.5, "minX": 126.0, "maxY": 52.0, "series": [{"data": [[4580.0, 52.0], [1779.0, 51.0], [3515.0, 52.0], [126.0, 42.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4580.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956276E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956276E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956276E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956276E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956276E12, 166.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956276E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956276E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956276E12, 166.66666666666666]], "isOverall": false, "label": "Microservice-based client-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956276E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956276E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956276E12, 166.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956276E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

