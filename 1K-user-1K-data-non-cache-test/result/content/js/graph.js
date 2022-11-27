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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 290.0, "series": [{"data": [[0.0, 4.0], [0.1, 16.0], [0.2, 23.0], [0.3, 26.0], [0.4, 29.0], [0.5, 30.0], [0.6, 31.0], [0.7, 32.0], [0.8, 32.0], [0.9, 32.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 36.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 37.0], [5.1, 37.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 38.0], [6.4, 38.0], [6.5, 38.0], [6.6, 38.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 39.0], [7.5, 39.0], [7.6, 39.0], [7.7, 39.0], [7.8, 39.0], [7.9, 39.0], [8.0, 39.0], [8.1, 39.0], [8.2, 39.0], [8.3, 39.0], [8.4, 39.0], [8.5, 39.0], [8.6, 39.0], [8.7, 39.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 39.0], [9.8, 39.0], [9.9, 39.0], [10.0, 40.0], [10.1, 40.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 41.0], [14.4, 41.0], [14.5, 41.0], [14.6, 41.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 41.0], [15.2, 41.0], [15.3, 41.0], [15.4, 41.0], [15.5, 41.0], [15.6, 41.0], [15.7, 41.0], [15.8, 41.0], [15.9, 41.0], [16.0, 41.0], [16.1, 41.0], [16.2, 41.0], [16.3, 41.0], [16.4, 41.0], [16.5, 41.0], [16.6, 41.0], [16.7, 41.0], [16.8, 41.0], [16.9, 42.0], [17.0, 42.0], [17.1, 42.0], [17.2, 42.0], [17.3, 42.0], [17.4, 42.0], [17.5, 42.0], [17.6, 42.0], [17.7, 42.0], [17.8, 42.0], [17.9, 42.0], [18.0, 42.0], [18.1, 42.0], [18.2, 42.0], [18.3, 42.0], [18.4, 42.0], [18.5, 42.0], [18.6, 42.0], [18.7, 42.0], [18.8, 42.0], [18.9, 42.0], [19.0, 42.0], [19.1, 42.0], [19.2, 42.0], [19.3, 42.0], [19.4, 42.0], [19.5, 42.0], [19.6, 42.0], [19.7, 42.0], [19.8, 42.0], [19.9, 42.0], [20.0, 42.0], [20.1, 42.0], [20.2, 42.0], [20.3, 42.0], [20.4, 43.0], [20.5, 43.0], [20.6, 43.0], [20.7, 43.0], [20.8, 43.0], [20.9, 43.0], [21.0, 43.0], [21.1, 43.0], [21.2, 43.0], [21.3, 43.0], [21.4, 43.0], [21.5, 43.0], [21.6, 43.0], [21.7, 43.0], [21.8, 43.0], [21.9, 43.0], [22.0, 43.0], [22.1, 43.0], [22.2, 43.0], [22.3, 43.0], [22.4, 43.0], [22.5, 43.0], [22.6, 43.0], [22.7, 43.0], [22.8, 43.0], [22.9, 43.0], [23.0, 43.0], [23.1, 43.0], [23.2, 43.0], [23.3, 43.0], [23.4, 43.0], [23.5, 43.0], [23.6, 43.0], [23.7, 43.0], [23.8, 43.0], [23.9, 43.0], [24.0, 44.0], [24.1, 44.0], [24.2, 44.0], [24.3, 44.0], [24.4, 44.0], [24.5, 44.0], [24.6, 44.0], [24.7, 44.0], [24.8, 44.0], [24.9, 44.0], [25.0, 44.0], [25.1, 44.0], [25.2, 44.0], [25.3, 44.0], [25.4, 44.0], [25.5, 44.0], [25.6, 44.0], [25.7, 44.0], [25.8, 44.0], [25.9, 44.0], [26.0, 44.0], [26.1, 44.0], [26.2, 44.0], [26.3, 44.0], [26.4, 44.0], [26.5, 44.0], [26.6, 44.0], [26.7, 44.0], [26.8, 44.0], [26.9, 44.0], [27.0, 44.0], [27.1, 44.0], [27.2, 44.0], [27.3, 44.0], [27.4, 44.0], [27.5, 44.0], [27.6, 44.0], [27.7, 44.0], [27.8, 44.0], [27.9, 44.0], [28.0, 44.0], [28.1, 44.0], [28.2, 44.0], [28.3, 45.0], [28.4, 45.0], [28.5, 45.0], [28.6, 45.0], [28.7, 45.0], [28.8, 45.0], [28.9, 45.0], [29.0, 45.0], [29.1, 45.0], [29.2, 45.0], [29.3, 45.0], [29.4, 45.0], [29.5, 45.0], [29.6, 45.0], [29.7, 45.0], [29.8, 45.0], [29.9, 45.0], [30.0, 45.0], [30.1, 45.0], [30.2, 45.0], [30.3, 45.0], [30.4, 45.0], [30.5, 45.0], [30.6, 45.0], [30.7, 45.0], [30.8, 45.0], [30.9, 45.0], [31.0, 45.0], [31.1, 45.0], [31.2, 45.0], [31.3, 45.0], [31.4, 45.0], [31.5, 45.0], [31.6, 45.0], [31.7, 45.0], [31.8, 45.0], [31.9, 45.0], [32.0, 45.0], [32.1, 45.0], [32.2, 45.0], [32.3, 46.0], [32.4, 46.0], [32.5, 46.0], [32.6, 46.0], [32.7, 46.0], [32.8, 46.0], [32.9, 46.0], [33.0, 46.0], [33.1, 46.0], [33.2, 46.0], [33.3, 46.0], [33.4, 46.0], [33.5, 46.0], [33.6, 46.0], [33.7, 46.0], [33.8, 46.0], [33.9, 46.0], [34.0, 46.0], [34.1, 46.0], [34.2, 46.0], [34.3, 46.0], [34.4, 46.0], [34.5, 46.0], [34.6, 46.0], [34.7, 46.0], [34.8, 46.0], [34.9, 46.0], [35.0, 46.0], [35.1, 46.0], [35.2, 46.0], [35.3, 46.0], [35.4, 46.0], [35.5, 46.0], [35.6, 46.0], [35.7, 46.0], [35.8, 46.0], [35.9, 46.0], [36.0, 46.0], [36.1, 46.0], [36.2, 46.0], [36.3, 46.0], [36.4, 46.0], [36.5, 46.0], [36.6, 47.0], [36.7, 47.0], [36.8, 47.0], [36.9, 47.0], [37.0, 47.0], [37.1, 47.0], [37.2, 47.0], [37.3, 47.0], [37.4, 47.0], [37.5, 47.0], [37.6, 47.0], [37.7, 47.0], [37.8, 47.0], [37.9, 47.0], [38.0, 47.0], [38.1, 47.0], [38.2, 47.0], [38.3, 47.0], [38.4, 47.0], [38.5, 47.0], [38.6, 47.0], [38.7, 47.0], [38.8, 47.0], [38.9, 47.0], [39.0, 47.0], [39.1, 47.0], [39.2, 47.0], [39.3, 47.0], [39.4, 47.0], [39.5, 47.0], [39.6, 47.0], [39.7, 47.0], [39.8, 47.0], [39.9, 47.0], [40.0, 47.0], [40.1, 47.0], [40.2, 47.0], [40.3, 47.0], [40.4, 47.0], [40.5, 47.0], [40.6, 47.0], [40.7, 47.0], [40.8, 47.0], [40.9, 47.0], [41.0, 48.0], [41.1, 48.0], [41.2, 48.0], [41.3, 48.0], [41.4, 48.0], [41.5, 48.0], [41.6, 48.0], [41.7, 48.0], [41.8, 48.0], [41.9, 48.0], [42.0, 48.0], [42.1, 48.0], [42.2, 48.0], [42.3, 48.0], [42.4, 48.0], [42.5, 48.0], [42.6, 48.0], [42.7, 48.0], [42.8, 48.0], [42.9, 48.0], [43.0, 48.0], [43.1, 48.0], [43.2, 48.0], [43.3, 48.0], [43.4, 48.0], [43.5, 48.0], [43.6, 48.0], [43.7, 48.0], [43.8, 48.0], [43.9, 48.0], [44.0, 48.0], [44.1, 48.0], [44.2, 48.0], [44.3, 48.0], [44.4, 48.0], [44.5, 48.0], [44.6, 48.0], [44.7, 48.0], [44.8, 48.0], [44.9, 48.0], [45.0, 48.0], [45.1, 49.0], [45.2, 49.0], [45.3, 49.0], [45.4, 49.0], [45.5, 49.0], [45.6, 49.0], [45.7, 49.0], [45.8, 49.0], [45.9, 49.0], [46.0, 49.0], [46.1, 49.0], [46.2, 49.0], [46.3, 49.0], [46.4, 49.0], [46.5, 49.0], [46.6, 49.0], [46.7, 49.0], [46.8, 49.0], [46.9, 49.0], [47.0, 49.0], [47.1, 49.0], [47.2, 49.0], [47.3, 49.0], [47.4, 49.0], [47.5, 49.0], [47.6, 49.0], [47.7, 49.0], [47.8, 49.0], [47.9, 49.0], [48.0, 49.0], [48.1, 49.0], [48.2, 49.0], [48.3, 49.0], [48.4, 49.0], [48.5, 49.0], [48.6, 49.0], [48.7, 49.0], [48.8, 49.0], [48.9, 49.0], [49.0, 49.0], [49.1, 49.0], [49.2, 49.0], [49.3, 50.0], [49.4, 50.0], [49.5, 50.0], [49.6, 50.0], [49.7, 50.0], [49.8, 50.0], [49.9, 50.0], [50.0, 50.0], [50.1, 50.0], [50.2, 50.0], [50.3, 50.0], [50.4, 50.0], [50.5, 50.0], [50.6, 50.0], [50.7, 50.0], [50.8, 50.0], [50.9, 50.0], [51.0, 50.0], [51.1, 50.0], [51.2, 50.0], [51.3, 50.0], [51.4, 50.0], [51.5, 50.0], [51.6, 50.0], [51.7, 50.0], [51.8, 50.0], [51.9, 50.0], [52.0, 50.0], [52.1, 50.0], [52.2, 50.0], [52.3, 50.0], [52.4, 50.0], [52.5, 50.0], [52.6, 50.0], [52.7, 50.0], [52.8, 50.0], [52.9, 50.0], [53.0, 50.0], [53.1, 51.0], [53.2, 51.0], [53.3, 51.0], [53.4, 51.0], [53.5, 51.0], [53.6, 51.0], [53.7, 51.0], [53.8, 51.0], [53.9, 51.0], [54.0, 51.0], [54.1, 51.0], [54.2, 51.0], [54.3, 51.0], [54.4, 51.0], [54.5, 51.0], [54.6, 51.0], [54.7, 51.0], [54.8, 51.0], [54.9, 51.0], [55.0, 51.0], [55.1, 51.0], [55.2, 51.0], [55.3, 51.0], [55.4, 51.0], [55.5, 51.0], [55.6, 51.0], [55.7, 51.0], [55.8, 51.0], [55.9, 51.0], [56.0, 51.0], [56.1, 51.0], [56.2, 51.0], [56.3, 51.0], [56.4, 51.0], [56.5, 51.0], [56.6, 51.0], [56.7, 51.0], [56.8, 51.0], [56.9, 52.0], [57.0, 52.0], [57.1, 52.0], [57.2, 52.0], [57.3, 52.0], [57.4, 52.0], [57.5, 52.0], [57.6, 52.0], [57.7, 52.0], [57.8, 52.0], [57.9, 52.0], [58.0, 52.0], [58.1, 52.0], [58.2, 52.0], [58.3, 52.0], [58.4, 52.0], [58.5, 52.0], [58.6, 52.0], [58.7, 52.0], [58.8, 52.0], [58.9, 52.0], [59.0, 52.0], [59.1, 52.0], [59.2, 52.0], [59.3, 52.0], [59.4, 52.0], [59.5, 52.0], [59.6, 52.0], [59.7, 52.0], [59.8, 52.0], [59.9, 52.0], [60.0, 52.0], [60.1, 52.0], [60.2, 52.0], [60.3, 52.0], [60.4, 52.0], [60.5, 52.0], [60.6, 53.0], [60.7, 53.0], [60.8, 53.0], [60.9, 53.0], [61.0, 53.0], [61.1, 53.0], [61.2, 53.0], [61.3, 53.0], [61.4, 53.0], [61.5, 53.0], [61.6, 53.0], [61.7, 53.0], [61.8, 53.0], [61.9, 53.0], [62.0, 53.0], [62.1, 53.0], [62.2, 53.0], [62.3, 53.0], [62.4, 53.0], [62.5, 53.0], [62.6, 53.0], [62.7, 53.0], [62.8, 53.0], [62.9, 53.0], [63.0, 53.0], [63.1, 53.0], [63.2, 53.0], [63.3, 53.0], [63.4, 53.0], [63.5, 53.0], [63.6, 53.0], [63.7, 54.0], [63.8, 54.0], [63.9, 54.0], [64.0, 54.0], [64.1, 54.0], [64.2, 54.0], [64.3, 54.0], [64.4, 54.0], [64.5, 54.0], [64.6, 54.0], [64.7, 54.0], [64.8, 54.0], [64.9, 54.0], [65.0, 54.0], [65.1, 54.0], [65.2, 54.0], [65.3, 54.0], [65.4, 54.0], [65.5, 54.0], [65.6, 54.0], [65.7, 54.0], [65.8, 54.0], [65.9, 54.0], [66.0, 54.0], [66.1, 54.0], [66.2, 54.0], [66.3, 54.0], [66.4, 54.0], [66.5, 54.0], [66.6, 54.0], [66.7, 54.0], [66.8, 54.0], [66.9, 54.0], [67.0, 54.0], [67.1, 54.0], [67.2, 55.0], [67.3, 55.0], [67.4, 55.0], [67.5, 55.0], [67.6, 55.0], [67.7, 55.0], [67.8, 55.0], [67.9, 55.0], [68.0, 55.0], [68.1, 55.0], [68.2, 55.0], [68.3, 55.0], [68.4, 55.0], [68.5, 55.0], [68.6, 55.0], [68.7, 55.0], [68.8, 55.0], [68.9, 55.0], [69.0, 55.0], [69.1, 55.0], [69.2, 55.0], [69.3, 55.0], [69.4, 55.0], [69.5, 55.0], [69.6, 55.0], [69.7, 55.0], [69.8, 56.0], [69.9, 56.0], [70.0, 56.0], [70.1, 56.0], [70.2, 56.0], [70.3, 56.0], [70.4, 56.0], [70.5, 56.0], [70.6, 56.0], [70.7, 56.0], [70.8, 56.0], [70.9, 56.0], [71.0, 56.0], [71.1, 56.0], [71.2, 56.0], [71.3, 56.0], [71.4, 56.0], [71.5, 56.0], [71.6, 56.0], [71.7, 56.0], [71.8, 56.0], [71.9, 56.0], [72.0, 56.0], [72.1, 56.0], [72.2, 56.0], [72.3, 56.0], [72.4, 56.0], [72.5, 56.0], [72.6, 56.0], [72.7, 56.0], [72.8, 57.0], [72.9, 57.0], [73.0, 57.0], [73.1, 57.0], [73.2, 57.0], [73.3, 57.0], [73.4, 57.0], [73.5, 57.0], [73.6, 57.0], [73.7, 57.0], [73.8, 57.0], [73.9, 57.0], [74.0, 57.0], [74.1, 57.0], [74.2, 57.0], [74.3, 57.0], [74.4, 57.0], [74.5, 57.0], [74.6, 57.0], [74.7, 57.0], [74.8, 57.0], [74.9, 57.0], [75.0, 57.0], [75.1, 57.0], [75.2, 57.0], [75.3, 58.0], [75.4, 58.0], [75.5, 58.0], [75.6, 58.0], [75.7, 58.0], [75.8, 58.0], [75.9, 58.0], [76.0, 58.0], [76.1, 58.0], [76.2, 58.0], [76.3, 58.0], [76.4, 58.0], [76.5, 58.0], [76.6, 58.0], [76.7, 58.0], [76.8, 58.0], [76.9, 58.0], [77.0, 58.0], [77.1, 58.0], [77.2, 58.0], [77.3, 58.0], [77.4, 58.0], [77.5, 59.0], [77.6, 59.0], [77.7, 59.0], [77.8, 59.0], [77.9, 59.0], [78.0, 59.0], [78.1, 59.0], [78.2, 59.0], [78.3, 59.0], [78.4, 59.0], [78.5, 59.0], [78.6, 59.0], [78.7, 59.0], [78.8, 59.0], [78.9, 59.0], [79.0, 59.0], [79.1, 59.0], [79.2, 59.0], [79.3, 59.0], [79.4, 59.0], [79.5, 59.0], [79.6, 59.0], [79.7, 59.0], [79.8, 59.0], [79.9, 59.0], [80.0, 60.0], [80.1, 60.0], [80.2, 60.0], [80.3, 60.0], [80.4, 60.0], [80.5, 60.0], [80.6, 60.0], [80.7, 60.0], [80.8, 60.0], [80.9, 60.0], [81.0, 60.0], [81.1, 60.0], [81.2, 60.0], [81.3, 60.0], [81.4, 60.0], [81.5, 60.0], [81.6, 60.0], [81.7, 60.0], [81.8, 60.0], [81.9, 60.0], [82.0, 60.0], [82.1, 61.0], [82.2, 61.0], [82.3, 61.0], [82.4, 61.0], [82.5, 61.0], [82.6, 61.0], [82.7, 61.0], [82.8, 61.0], [82.9, 61.0], [83.0, 61.0], [83.1, 61.0], [83.2, 61.0], [83.3, 61.0], [83.4, 61.0], [83.5, 61.0], [83.6, 61.0], [83.7, 61.0], [83.8, 61.0], [83.9, 61.0], [84.0, 62.0], [84.1, 62.0], [84.2, 62.0], [84.3, 62.0], [84.4, 62.0], [84.5, 62.0], [84.6, 62.0], [84.7, 62.0], [84.8, 62.0], [84.9, 62.0], [85.0, 62.0], [85.1, 62.0], [85.2, 62.0], [85.3, 62.0], [85.4, 62.0], [85.5, 62.0], [85.6, 63.0], [85.7, 63.0], [85.8, 63.0], [85.9, 63.0], [86.0, 63.0], [86.1, 63.0], [86.2, 63.0], [86.3, 63.0], [86.4, 63.0], [86.5, 63.0], [86.6, 63.0], [86.7, 63.0], [86.8, 63.0], [86.9, 63.0], [87.0, 64.0], [87.1, 64.0], [87.2, 64.0], [87.3, 64.0], [87.4, 64.0], [87.5, 64.0], [87.6, 64.0], [87.7, 64.0], [87.8, 64.0], [87.9, 64.0], [88.0, 64.0], [88.1, 65.0], [88.2, 65.0], [88.3, 65.0], [88.4, 65.0], [88.5, 65.0], [88.6, 65.0], [88.7, 65.0], [88.8, 65.0], [88.9, 65.0], [89.0, 65.0], [89.1, 65.0], [89.2, 66.0], [89.3, 66.0], [89.4, 66.0], [89.5, 66.0], [89.6, 66.0], [89.7, 66.0], [89.8, 66.0], [89.9, 66.0], [90.0, 67.0], [90.1, 67.0], [90.2, 67.0], [90.3, 67.0], [90.4, 67.0], [90.5, 67.0], [90.6, 67.0], [90.7, 67.0], [90.8, 67.0], [90.9, 68.0], [91.0, 68.0], [91.1, 68.0], [91.2, 68.0], [91.3, 68.0], [91.4, 68.0], [91.5, 68.0], [91.6, 68.0], [91.7, 68.0], [91.8, 69.0], [91.9, 69.0], [92.0, 69.0], [92.1, 69.0], [92.2, 69.0], [92.3, 69.0], [92.4, 70.0], [92.5, 70.0], [92.6, 70.0], [92.7, 70.0], [92.8, 70.0], [92.9, 70.0], [93.0, 70.0], [93.1, 71.0], [93.2, 71.0], [93.3, 71.0], [93.4, 71.0], [93.5, 71.0], [93.6, 72.0], [93.7, 72.0], [93.8, 72.0], [93.9, 72.0], [94.0, 72.0], [94.1, 72.0], [94.2, 73.0], [94.3, 73.0], [94.4, 73.0], [94.5, 73.0], [94.6, 73.0], [94.7, 74.0], [94.8, 74.0], [94.9, 74.0], [95.0, 75.0], [95.1, 75.0], [95.2, 75.0], [95.3, 75.0], [95.4, 76.0], [95.5, 76.0], [95.6, 77.0], [95.7, 77.0], [95.8, 77.0], [95.9, 78.0], [96.0, 79.0], [96.1, 79.0], [96.2, 80.0], [96.3, 80.0], [96.4, 81.0], [96.5, 82.0], [96.6, 83.0], [96.7, 84.0], [96.8, 84.0], [96.9, 85.0], [97.0, 87.0], [97.1, 88.0], [97.2, 90.0], [97.3, 92.0], [97.4, 94.0], [97.5, 96.0], [97.6, 97.0], [97.7, 100.0], [97.8, 102.0], [97.9, 105.0], [98.0, 107.0], [98.1, 109.0], [98.2, 113.0], [98.3, 125.0], [98.4, 140.0], [98.5, 145.0], [98.6, 155.0], [98.7, 160.0], [98.8, 175.0], [98.9, 179.0], [99.0, 182.0], [99.1, 186.0], [99.2, 190.0], [99.3, 194.0], [99.4, 196.0], [99.5, 197.0], [99.6, 200.0], [99.7, 204.0], [99.8, 219.0], [99.9, 264.0], [100.0, 290.0]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "maxY": 9769.0, "series": [{"data": [[0.0, 9769.0], [100.0, 190.0], [200.0, 41.0]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 205.78949999999966, "minX": 1.6695618E12, "maxY": 205.78949999999966, "series": [{"data": [[1.6695618E12, 205.78949999999966]], "isOverall": false, "label": "client-to-gateway-non-caching (POST)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6695618E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.0, "maxY": 154.91044776119398, "series": [{"data": [[2.0, 16.0], [3.0, 28.0], [4.0, 27.0], [5.0, 15.0], [6.0, 27.0], [7.0, 22.0], [8.0, 17.0], [9.0, 19.0], [10.0, 25.0], [12.0, 26.0], [13.0, 42.5], [14.0, 25.0], [17.0, 43.0], [18.0, 26.0], [19.0, 34.0], [21.0, 35.0], [22.0, 30.333333333333332], [23.0, 41.0], [25.0, 44.0], [29.0, 32.0], [31.0, 28.0], [32.0, 23.0], [35.0, 31.0], [34.0, 35.5], [37.0, 38.0], [36.0, 42.0], [39.0, 46.142857142857146], [38.0, 46.0], [41.0, 40.0], [40.0, 48.0], [42.0, 46.0], [45.0, 46.0], [44.0, 43.0], [47.0, 43.0], [46.0, 39.0], [49.0, 35.0], [48.0, 41.0], [51.0, 33.0], [50.0, 34.0], [53.0, 32.0], [52.0, 32.4], [54.0, 40.0], [56.0, 39.0], [71.0, 42.5], [70.0, 52.0], [68.0, 44.27777777777778], [75.0, 43.5], [74.0, 40.875], [73.0, 41.0], [79.0, 46.0], [78.0, 43.5], [76.0, 39.0], [83.0, 53.0], [81.0, 53.5], [87.0, 46.888888888888886], [85.0, 53.0], [86.0, 53.0], [91.0, 49.25], [88.0, 49.142857142857146], [95.0, 43.666666666666664], [94.0, 44.666666666666664], [93.0, 44.666666666666664], [92.0, 45.666666666666664], [99.0, 42.666666666666664], [97.0, 39.0], [103.0, 45.17647058823529], [102.0, 43.22222222222222], [101.0, 44.5], [100.0, 43.307692307692314], [107.0, 51.05555555555555], [105.0, 46.390243902439025], [104.0, 43.647058823529406], [106.0, 44.0], [111.0, 48.652173913043484], [110.0, 48.0], [109.0, 47.599999999999994], [108.0, 47.38888888888889], [115.0, 55.714285714285715], [113.0, 53.261904761904766], [114.0, 70.28571428571429], [112.0, 52.89999999999999], [119.0, 45.714285714285715], [118.0, 49.0], [117.0, 53.333333333333336], [116.0, 53.484848484848484], [123.0, 48.76923076923078], [122.0, 49.46153846153846], [121.0, 51.20000000000001], [120.0, 49.0], [126.0, 48.015384615384626], [127.0, 47.499999999999986], [125.0, 45.43902439024392], [124.0, 49.85714285714286], [132.0, 154.91044776119398], [134.0, 122.22727272727276], [133.0, 102.625], [135.0, 45.18181818181817], [131.0, 50.266666666666666], [129.0, 51.62962962962964], [128.0, 48.81944444444443], [130.0, 49.333333333333336], [137.0, 56.56818181818183], [138.0, 56.375], [139.0, 51.12499999999999], [140.0, 58.54545454545455], [141.0, 52.906250000000014], [142.0, 52.85185185185186], [143.0, 52.72413793103447], [136.0, 60.80851063829786], [146.0, 72.0], [147.0, 43.333333333333336], [148.0, 62.25], [144.0, 50.04878048780488], [151.0, 44.099999999999994], [150.0, 44.030303030303024], [145.0, 45.32], [149.0, 38.0], [152.0, 48.266666666666666], [158.0, 53.77000000000001], [154.0, 42.46808510638298], [153.0, 44.68181818181819], [159.0, 48.58620689655173], [157.0, 41.44444444444445], [155.0, 42.5], [160.0, 43.34285714285713], [161.0, 46.10126582278482], [162.0, 49.57264957264958], [163.0, 49.1951219512195], [164.0, 44.42307692307692], [166.0, 48.45454545454546], [167.0, 52.05607476635514], [165.0, 41.0], [168.0, 50.233333333333334], [169.0, 55.47058823529413], [171.0, 47.34615384615385], [172.0, 44.09523809523809], [175.0, 64.6153846153846], [170.0, 45.71212121212121], [174.0, 41.5], [173.0, 42.5], [176.0, 48.03225806451613], [177.0, 44.88461538461538], [178.0, 49.738095238095234], [179.0, 52.1029411764706], [181.0, 53.58181818181818], [182.0, 54.68518518518515], [183.0, 74.58333333333336], [180.0, 52.51428571428571], [184.0, 67.89166666666667], [185.0, 50.76785714285715], [191.0, 90.79310344827586], [190.0, 47.153846153846146], [189.0, 55.860465116279066], [188.0, 39.45454545454545], [187.0, 50.0625], [186.0, 46.609756097560975], [192.0, 52.485294117647065], [193.0, 59.82608695652174], [194.0, 76.17857142857144], [195.0, 51.81176470588236], [196.0, 53.04999999999999], [197.0, 52.949999999999996], [198.0, 49.892857142857146], [199.0, 48.60416666666665], [200.0, 52.375], [201.0, 54.63207547169811], [202.0, 68.50000000000001], [203.0, 60.18750000000001], [204.0, 75.37931034482757], [205.0, 55.69230769230769], [206.0, 59.30801687763714], [207.0, 56.80714285714286], [209.0, 53.93548387096774], [208.0, 57.05357142857142], [213.0, 50.652777777777786], [212.0, 74.13636363636364], [211.0, 62.120000000000005], [210.0, 61.19607843137255], [215.0, 51.01754385964912], [214.0, 44.588235294117624], [216.0, 44.82278481012657], [218.0, 45.85294117647058], [223.0, 43.3], [222.0, 44.39669421487602], [221.0, 46.856353591160186], [220.0, 45.77911646586344], [219.0, 47.34444444444443], [217.0, 43.538461538461526], [230.0, 55.16243654822332], [231.0, 53.734939759036145], [229.0, 50.199999999999996], [228.0, 47.09489051094889], [227.0, 48.277486910994746], [226.0, 48.38172043010752], [225.0, 45.953703703703674], [224.0, 48.59493670886075], [232.0, 53.77659574468086], [235.0, 53.45121951219512], [234.0, 51.89215686274508], [233.0, 55.92727272727272], [236.0, 47.52873563218391], [237.0, 49.23353293413176], [239.0, 52.655172413793075], [238.0, 47.81818181818182], [240.0, 63.906976744186046], [241.0, 55.83783783783784], [242.0, 55.326086956521735], [243.0, 58.05084745762712], [244.0, 48.92857142857144], [246.0, 52.666666666666664], [245.0, 55.59999999999999], [247.0, 61.666666666666664], [252.0, 50.0], [251.0, 53.45454545454545], [250.0, 50.70833333333333], [249.0, 53.18749999999999], [255.0, 48.583333333333336], [254.0, 55.38888888888889], [253.0, 52.33333333333333], [269.0, 58.9240506329114], [257.0, 50.75], [256.0, 49.41666666666667], [263.0, 49.16666666666667], [262.0, 53.5], [259.0, 48.61538461538462], [258.0, 47.75], [268.0, 59.911764705882355], [260.0, 52.916666666666664], [261.0, 53.500000000000014], [266.0, 52.54545454545455], [265.0, 52.36363636363636], [264.0, 50.2], [267.0, 60.625], [271.0, 59.39999999999999], [270.0, 57.14285714285714], [279.0, 55.888888888888886], [277.0, 55.5], [276.0, 57.25], [281.0, 61.090909090909086], [280.0, 58.25], [287.0, 50.775], [286.0, 59.88888888888888], [282.0, 57.10526315789474], [278.0, 57.92307692307693], [284.0, 57.619047619047606], [275.0, 54.26190476190476], [274.0, 51.8], [273.0, 51.285714285714285], [272.0, 49.4], [285.0, 54.78787878787878], [283.0, 57.81818181818181], [291.0, 61.59999999999999], [289.0, 50.66666666666667], [290.0, 54.85], [288.0, 54.42857142857143], [292.0, 58.542372881355945], [293.0, 60.62264150943396], [295.0, 61.333333333333336], [294.0, 62.348837209302324], [303.0, 66.39024390243902], [296.0, 62.44927536231885], [302.0, 63.866666666666646], [301.0, 62.888888888888886], [300.0, 61.66666666666667], [299.0, 61.04761904761906], [298.0, 68.88], [297.0, 62.375], [309.0, 65.66666666666667], [307.0, 58.0], [306.0, 69.77777777777777], [304.0, 75.33333333333333], [1.0, 4.0]], "isOverall": false, "label": "Microservice-based client", "isController": false}, {"data": [[205.83179999999962, 53.618000000000094]], "isOverall": false, "label": "Microservice-based client-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 309.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22333.333333333332, "minX": 1.6695618E12, "maxY": 40500.0, "series": [{"data": [[1.6695618E12, 22333.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6695618E12, 40500.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6695618E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 53.618000000000094, "minX": 1.6695618E12, "maxY": 53.618000000000094, "series": [{"data": [[1.6695618E12, 53.618000000000094]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6695618E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 53.55710000000002, "minX": 1.6695618E12, "maxY": 53.55710000000002, "series": [{"data": [[1.6695618E12, 53.55710000000002]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6695618E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8116999999999994, "minX": 1.6695618E12, "maxY": 0.8116999999999994, "series": [{"data": [[1.6695618E12, 0.8116999999999994]], "isOverall": false, "label": "Microservice-based client", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6695618E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6695618E12, "maxY": 290.0, "series": [{"data": [[1.6695618E12, 290.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6695618E12, 67.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6695618E12, 182.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6695618E12, 75.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6695618E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6695618E12, 50.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6695618E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 48.0, "minX": 1093.0, "maxY": 54.0, "series": [{"data": [[1093.0, 54.0], [4457.0, 50.0], [2811.0, 49.0], [1639.0, 48.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4457.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 48.0, "minX": 1093.0, "maxY": 54.0, "series": [{"data": [[1093.0, 54.0], [4457.0, 50.0], [2811.0, 49.0], [1639.0, 48.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4457.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.6695618E12, "maxY": 166.66666666666666, "series": [{"data": [[1.6695618E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6695618E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.6695618E12, "maxY": 166.66666666666666, "series": [{"data": [[1.6695618E12, 166.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6695618E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.6695618E12, "maxY": 166.66666666666666, "series": [{"data": [[1.6695618E12, 166.66666666666666]], "isOverall": false, "label": "Microservice-based client-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6695618E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.6695618E12, "maxY": 166.66666666666666, "series": [{"data": [[1.6695618E12, 166.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6695618E12, "title": "Total Transactions Per Second"}},
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

