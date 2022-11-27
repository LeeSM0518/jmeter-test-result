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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 336.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 3.0], [0.5, 3.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 11.0], [8.1, 11.0], [8.2, 11.0], [8.3, 11.0], [8.4, 11.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 12.0], [9.5, 12.0], [9.6, 12.0], [9.7, 12.0], [9.8, 12.0], [9.9, 12.0], [10.0, 12.0], [10.1, 12.0], [10.2, 12.0], [10.3, 12.0], [10.4, 12.0], [10.5, 12.0], [10.6, 12.0], [10.7, 12.0], [10.8, 12.0], [10.9, 12.0], [11.0, 12.0], [11.1, 13.0], [11.2, 13.0], [11.3, 13.0], [11.4, 13.0], [11.5, 13.0], [11.6, 13.0], [11.7, 13.0], [11.8, 13.0], [11.9, 13.0], [12.0, 13.0], [12.1, 13.0], [12.2, 13.0], [12.3, 13.0], [12.4, 13.0], [12.5, 13.0], [12.6, 13.0], [12.7, 13.0], [12.8, 14.0], [12.9, 14.0], [13.0, 14.0], [13.1, 14.0], [13.2, 14.0], [13.3, 14.0], [13.4, 14.0], [13.5, 14.0], [13.6, 14.0], [13.7, 14.0], [13.8, 14.0], [13.9, 14.0], [14.0, 14.0], [14.1, 14.0], [14.2, 14.0], [14.3, 14.0], [14.4, 14.0], [14.5, 15.0], [14.6, 15.0], [14.7, 15.0], [14.8, 15.0], [14.9, 15.0], [15.0, 15.0], [15.1, 15.0], [15.2, 15.0], [15.3, 15.0], [15.4, 15.0], [15.5, 15.0], [15.6, 15.0], [15.7, 15.0], [15.8, 15.0], [15.9, 15.0], [16.0, 15.0], [16.1, 15.0], [16.2, 15.0], [16.3, 15.0], [16.4, 15.0], [16.5, 15.0], [16.6, 15.0], [16.7, 16.0], [16.8, 16.0], [16.9, 16.0], [17.0, 16.0], [17.1, 16.0], [17.2, 16.0], [17.3, 16.0], [17.4, 16.0], [17.5, 16.0], [17.6, 16.0], [17.7, 16.0], [17.8, 16.0], [17.9, 16.0], [18.0, 16.0], [18.1, 16.0], [18.2, 16.0], [18.3, 16.0], [18.4, 16.0], [18.5, 16.0], [18.6, 16.0], [18.7, 16.0], [18.8, 16.0], [18.9, 16.0], [19.0, 16.0], [19.1, 16.0], [19.2, 16.0], [19.3, 16.0], [19.4, 16.0], [19.5, 16.0], [19.6, 16.0], [19.7, 16.0], [19.8, 17.0], [19.9, 17.0], [20.0, 17.0], [20.1, 17.0], [20.2, 17.0], [20.3, 17.0], [20.4, 17.0], [20.5, 17.0], [20.6, 17.0], [20.7, 17.0], [20.8, 17.0], [20.9, 17.0], [21.0, 17.0], [21.1, 17.0], [21.2, 17.0], [21.3, 17.0], [21.4, 17.0], [21.5, 17.0], [21.6, 17.0], [21.7, 17.0], [21.8, 17.0], [21.9, 17.0], [22.0, 17.0], [22.1, 17.0], [22.2, 17.0], [22.3, 17.0], [22.4, 17.0], [22.5, 17.0], [22.6, 17.0], [22.7, 17.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 18.0], [24.7, 18.0], [24.8, 18.0], [24.9, 18.0], [25.0, 18.0], [25.1, 18.0], [25.2, 18.0], [25.3, 18.0], [25.4, 18.0], [25.5, 19.0], [25.6, 19.0], [25.7, 19.0], [25.8, 19.0], [25.9, 19.0], [26.0, 19.0], [26.1, 19.0], [26.2, 19.0], [26.3, 19.0], [26.4, 19.0], [26.5, 19.0], [26.6, 19.0], [26.7, 19.0], [26.8, 19.0], [26.9, 19.0], [27.0, 19.0], [27.1, 19.0], [27.2, 19.0], [27.3, 19.0], [27.4, 19.0], [27.5, 19.0], [27.6, 19.0], [27.7, 20.0], [27.8, 20.0], [27.9, 20.0], [28.0, 20.0], [28.1, 20.0], [28.2, 20.0], [28.3, 20.0], [28.4, 20.0], [28.5, 20.0], [28.6, 20.0], [28.7, 20.0], [28.8, 20.0], [28.9, 20.0], [29.0, 20.0], [29.1, 20.0], [29.2, 20.0], [29.3, 20.0], [29.4, 20.0], [29.5, 20.0], [29.6, 20.0], [29.7, 20.0], [29.8, 21.0], [29.9, 21.0], [30.0, 21.0], [30.1, 21.0], [30.2, 21.0], [30.3, 21.0], [30.4, 21.0], [30.5, 21.0], [30.6, 21.0], [30.7, 21.0], [30.8, 21.0], [30.9, 21.0], [31.0, 21.0], [31.1, 21.0], [31.2, 21.0], [31.3, 21.0], [31.4, 21.0], [31.5, 22.0], [31.6, 22.0], [31.7, 22.0], [31.8, 22.0], [31.9, 22.0], [32.0, 22.0], [32.1, 22.0], [32.2, 22.0], [32.3, 22.0], [32.4, 22.0], [32.5, 22.0], [32.6, 22.0], [32.7, 22.0], [32.8, 22.0], [32.9, 22.0], [33.0, 22.0], [33.1, 22.0], [33.2, 22.0], [33.3, 22.0], [33.4, 22.0], [33.5, 22.0], [33.6, 22.0], [33.7, 22.0], [33.8, 23.0], [33.9, 23.0], [34.0, 23.0], [34.1, 23.0], [34.2, 23.0], [34.3, 23.0], [34.4, 23.0], [34.5, 23.0], [34.6, 23.0], [34.7, 23.0], [34.8, 23.0], [34.9, 23.0], [35.0, 23.0], [35.1, 23.0], [35.2, 23.0], [35.3, 23.0], [35.4, 23.0], [35.5, 23.0], [35.6, 23.0], [35.7, 23.0], [35.8, 23.0], [35.9, 23.0], [36.0, 23.0], [36.1, 23.0], [36.2, 24.0], [36.3, 24.0], [36.4, 24.0], [36.5, 24.0], [36.6, 24.0], [36.7, 24.0], [36.8, 24.0], [36.9, 24.0], [37.0, 24.0], [37.1, 24.0], [37.2, 24.0], [37.3, 24.0], [37.4, 24.0], [37.5, 24.0], [37.6, 24.0], [37.7, 24.0], [37.8, 24.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 24.0], [38.3, 25.0], [38.4, 25.0], [38.5, 25.0], [38.6, 25.0], [38.7, 25.0], [38.8, 25.0], [38.9, 25.0], [39.0, 25.0], [39.1, 25.0], [39.2, 25.0], [39.3, 25.0], [39.4, 25.0], [39.5, 25.0], [39.6, 25.0], [39.7, 25.0], [39.8, 25.0], [39.9, 25.0], [40.0, 25.0], [40.1, 25.0], [40.2, 25.0], [40.3, 26.0], [40.4, 26.0], [40.5, 26.0], [40.6, 26.0], [40.7, 26.0], [40.8, 26.0], [40.9, 26.0], [41.0, 26.0], [41.1, 26.0], [41.2, 26.0], [41.3, 26.0], [41.4, 26.0], [41.5, 26.0], [41.6, 26.0], [41.7, 26.0], [41.8, 26.0], [41.9, 27.0], [42.0, 27.0], [42.1, 27.0], [42.2, 27.0], [42.3, 27.0], [42.4, 27.0], [42.5, 27.0], [42.6, 27.0], [42.7, 27.0], [42.8, 27.0], [42.9, 27.0], [43.0, 27.0], [43.1, 27.0], [43.2, 27.0], [43.3, 27.0], [43.4, 27.0], [43.5, 27.0], [43.6, 28.0], [43.7, 28.0], [43.8, 28.0], [43.9, 28.0], [44.0, 28.0], [44.1, 28.0], [44.2, 28.0], [44.3, 28.0], [44.4, 28.0], [44.5, 28.0], [44.6, 28.0], [44.7, 28.0], [44.8, 28.0], [44.9, 28.0], [45.0, 29.0], [45.1, 29.0], [45.2, 29.0], [45.3, 29.0], [45.4, 29.0], [45.5, 29.0], [45.6, 29.0], [45.7, 29.0], [45.8, 29.0], [45.9, 29.0], [46.0, 29.0], [46.1, 29.0], [46.2, 29.0], [46.3, 29.0], [46.4, 29.0], [46.5, 29.0], [46.6, 30.0], [46.7, 30.0], [46.8, 30.0], [46.9, 30.0], [47.0, 30.0], [47.1, 30.0], [47.2, 30.0], [47.3, 30.0], [47.4, 30.0], [47.5, 30.0], [47.6, 30.0], [47.7, 30.0], [47.8, 30.0], [47.9, 30.0], [48.0, 30.0], [48.1, 31.0], [48.2, 31.0], [48.3, 31.0], [48.4, 31.0], [48.5, 31.0], [48.6, 31.0], [48.7, 31.0], [48.8, 31.0], [48.9, 31.0], [49.0, 31.0], [49.1, 31.0], [49.2, 31.0], [49.3, 31.0], [49.4, 31.0], [49.5, 31.0], [49.6, 31.0], [49.7, 31.0], [49.8, 31.0], [49.9, 31.0], [50.0, 32.0], [50.1, 32.0], [50.2, 32.0], [50.3, 32.0], [50.4, 32.0], [50.5, 32.0], [50.6, 32.0], [50.7, 32.0], [50.8, 32.0], [50.9, 32.0], [51.0, 32.0], [51.1, 32.0], [51.2, 32.0], [51.3, 32.0], [51.4, 32.0], [51.5, 32.0], [51.6, 32.0], [51.7, 33.0], [51.8, 33.0], [51.9, 33.0], [52.0, 33.0], [52.1, 33.0], [52.2, 33.0], [52.3, 33.0], [52.4, 33.0], [52.5, 33.0], [52.6, 33.0], [52.7, 33.0], [52.8, 33.0], [52.9, 33.0], [53.0, 33.0], [53.1, 33.0], [53.2, 33.0], [53.3, 34.0], [53.4, 34.0], [53.5, 34.0], [53.6, 34.0], [53.7, 34.0], [53.8, 34.0], [53.9, 34.0], [54.0, 34.0], [54.1, 34.0], [54.2, 34.0], [54.3, 34.0], [54.4, 34.0], [54.5, 34.0], [54.6, 35.0], [54.7, 35.0], [54.8, 35.0], [54.9, 35.0], [55.0, 35.0], [55.1, 35.0], [55.2, 35.0], [55.3, 35.0], [55.4, 35.0], [55.5, 35.0], [55.6, 36.0], [55.7, 36.0], [55.8, 36.0], [55.9, 36.0], [56.0, 36.0], [56.1, 36.0], [56.2, 36.0], [56.3, 36.0], [56.4, 36.0], [56.5, 36.0], [56.6, 36.0], [56.7, 36.0], [56.8, 37.0], [56.9, 37.0], [57.0, 37.0], [57.1, 37.0], [57.2, 37.0], [57.3, 37.0], [57.4, 37.0], [57.5, 37.0], [57.6, 37.0], [57.7, 37.0], [57.8, 38.0], [57.9, 38.0], [58.0, 38.0], [58.1, 38.0], [58.2, 38.0], [58.3, 38.0], [58.4, 38.0], [58.5, 38.0], [58.6, 38.0], [58.7, 38.0], [58.8, 38.0], [58.9, 39.0], [59.0, 39.0], [59.1, 39.0], [59.2, 39.0], [59.3, 39.0], [59.4, 39.0], [59.5, 39.0], [59.6, 39.0], [59.7, 39.0], [59.8, 39.0], [59.9, 39.0], [60.0, 39.0], [60.1, 40.0], [60.2, 40.0], [60.3, 40.0], [60.4, 40.0], [60.5, 40.0], [60.6, 40.0], [60.7, 40.0], [60.8, 40.0], [60.9, 40.0], [61.0, 40.0], [61.1, 40.0], [61.2, 41.0], [61.3, 41.0], [61.4, 41.0], [61.5, 41.0], [61.6, 41.0], [61.7, 41.0], [61.8, 41.0], [61.9, 41.0], [62.0, 41.0], [62.1, 41.0], [62.2, 42.0], [62.3, 42.0], [62.4, 42.0], [62.5, 42.0], [62.6, 42.0], [62.7, 42.0], [62.8, 42.0], [62.9, 42.0], [63.0, 43.0], [63.1, 43.0], [63.2, 43.0], [63.3, 43.0], [63.4, 43.0], [63.5, 43.0], [63.6, 43.0], [63.7, 43.0], [63.8, 43.0], [63.9, 44.0], [64.0, 44.0], [64.1, 44.0], [64.2, 44.0], [64.3, 44.0], [64.4, 44.0], [64.5, 44.0], [64.6, 44.0], [64.7, 44.0], [64.8, 44.0], [64.9, 44.0], [65.0, 44.0], [65.1, 45.0], [65.2, 45.0], [65.3, 45.0], [65.4, 45.0], [65.5, 45.0], [65.6, 45.0], [65.7, 45.0], [65.8, 45.0], [65.9, 45.0], [66.0, 45.0], [66.1, 45.0], [66.2, 46.0], [66.3, 46.0], [66.4, 46.0], [66.5, 46.0], [66.6, 46.0], [66.7, 46.0], [66.8, 46.0], [66.9, 46.0], [67.0, 47.0], [67.1, 47.0], [67.2, 47.0], [67.3, 47.0], [67.4, 47.0], [67.5, 47.0], [67.6, 47.0], [67.7, 47.0], [67.8, 48.0], [67.9, 48.0], [68.0, 48.0], [68.1, 48.0], [68.2, 48.0], [68.3, 48.0], [68.4, 49.0], [68.5, 49.0], [68.6, 49.0], [68.7, 49.0], [68.8, 49.0], [68.9, 50.0], [69.0, 50.0], [69.1, 50.0], [69.2, 50.0], [69.3, 50.0], [69.4, 50.0], [69.5, 51.0], [69.6, 51.0], [69.7, 51.0], [69.8, 51.0], [69.9, 51.0], [70.0, 51.0], [70.1, 51.0], [70.2, 52.0], [70.3, 52.0], [70.4, 52.0], [70.5, 52.0], [70.6, 52.0], [70.7, 52.0], [70.8, 52.0], [70.9, 53.0], [71.0, 53.0], [71.1, 53.0], [71.2, 53.0], [71.3, 53.0], [71.4, 53.0], [71.5, 54.0], [71.6, 54.0], [71.7, 54.0], [71.8, 54.0], [71.9, 54.0], [72.0, 54.0], [72.1, 54.0], [72.2, 55.0], [72.3, 55.0], [72.4, 55.0], [72.5, 55.0], [72.6, 55.0], [72.7, 55.0], [72.8, 56.0], [72.9, 56.0], [73.0, 56.0], [73.1, 57.0], [73.2, 57.0], [73.3, 57.0], [73.4, 57.0], [73.5, 58.0], [73.6, 58.0], [73.7, 58.0], [73.8, 58.0], [73.9, 59.0], [74.0, 59.0], [74.1, 59.0], [74.2, 59.0], [74.3, 60.0], [74.4, 60.0], [74.5, 60.0], [74.6, 60.0], [74.7, 61.0], [74.8, 61.0], [74.9, 62.0], [75.0, 62.0], [75.1, 62.0], [75.2, 62.0], [75.3, 63.0], [75.4, 63.0], [75.5, 63.0], [75.6, 63.0], [75.7, 64.0], [75.8, 64.0], [75.9, 64.0], [76.0, 65.0], [76.1, 65.0], [76.2, 65.0], [76.3, 66.0], [76.4, 66.0], [76.5, 66.0], [76.6, 66.0], [76.7, 67.0], [76.8, 67.0], [76.9, 67.0], [77.0, 67.0], [77.1, 68.0], [77.2, 68.0], [77.3, 69.0], [77.4, 69.0], [77.5, 69.0], [77.6, 69.0], [77.7, 69.0], [77.8, 70.0], [77.9, 70.0], [78.0, 70.0], [78.1, 71.0], [78.2, 71.0], [78.3, 71.0], [78.4, 72.0], [78.5, 72.0], [78.6, 72.0], [78.7, 72.0], [78.8, 73.0], [78.9, 73.0], [79.0, 73.0], [79.1, 73.0], [79.2, 74.0], [79.3, 74.0], [79.4, 74.0], [79.5, 75.0], [79.6, 75.0], [79.7, 75.0], [79.8, 75.0], [79.9, 76.0], [80.0, 76.0], [80.1, 77.0], [80.2, 77.0], [80.3, 77.0], [80.4, 77.0], [80.5, 78.0], [80.6, 78.0], [80.7, 78.0], [80.8, 78.0], [80.9, 79.0], [81.0, 79.0], [81.1, 79.0], [81.2, 80.0], [81.3, 80.0], [81.4, 80.0], [81.5, 80.0], [81.6, 80.0], [81.7, 81.0], [81.8, 81.0], [81.9, 81.0], [82.0, 81.0], [82.1, 82.0], [82.2, 82.0], [82.3, 83.0], [82.4, 83.0], [82.5, 83.0], [82.6, 83.0], [82.7, 84.0], [82.8, 84.0], [82.9, 84.0], [83.0, 84.0], [83.1, 84.0], [83.2, 84.0], [83.3, 85.0], [83.4, 85.0], [83.5, 85.0], [83.6, 85.0], [83.7, 85.0], [83.8, 86.0], [83.9, 86.0], [84.0, 86.0], [84.1, 86.0], [84.2, 87.0], [84.3, 87.0], [84.4, 87.0], [84.5, 87.0], [84.6, 87.0], [84.7, 88.0], [84.8, 88.0], [84.9, 88.0], [85.0, 88.0], [85.1, 89.0], [85.2, 89.0], [85.3, 89.0], [85.4, 89.0], [85.5, 90.0], [85.6, 90.0], [85.7, 90.0], [85.8, 90.0], [85.9, 91.0], [86.0, 91.0], [86.1, 91.0], [86.2, 91.0], [86.3, 92.0], [86.4, 92.0], [86.5, 92.0], [86.6, 92.0], [86.7, 93.0], [86.8, 93.0], [86.9, 93.0], [87.0, 93.0], [87.1, 94.0], [87.2, 94.0], [87.3, 95.0], [87.4, 95.0], [87.5, 96.0], [87.6, 96.0], [87.7, 97.0], [87.8, 97.0], [87.9, 97.0], [88.0, 98.0], [88.1, 98.0], [88.2, 99.0], [88.3, 99.0], [88.4, 99.0], [88.5, 100.0], [88.6, 100.0], [88.7, 100.0], [88.8, 101.0], [88.9, 101.0], [89.0, 102.0], [89.1, 102.0], [89.2, 103.0], [89.3, 103.0], [89.4, 103.0], [89.5, 104.0], [89.6, 104.0], [89.7, 104.0], [89.8, 105.0], [89.9, 105.0], [90.0, 106.0], [90.1, 106.0], [90.2, 107.0], [90.3, 107.0], [90.4, 108.0], [90.5, 108.0], [90.6, 109.0], [90.7, 109.0], [90.8, 110.0], [90.9, 110.0], [91.0, 111.0], [91.1, 112.0], [91.2, 112.0], [91.3, 113.0], [91.4, 113.0], [91.5, 114.0], [91.6, 114.0], [91.7, 115.0], [91.8, 115.0], [91.9, 116.0], [92.0, 116.0], [92.1, 117.0], [92.2, 117.0], [92.3, 118.0], [92.4, 118.0], [92.5, 119.0], [92.6, 120.0], [92.7, 120.0], [92.8, 121.0], [92.9, 121.0], [93.0, 122.0], [93.1, 123.0], [93.2, 124.0], [93.3, 124.0], [93.4, 125.0], [93.5, 126.0], [93.6, 126.0], [93.7, 127.0], [93.8, 127.0], [93.9, 128.0], [94.0, 128.0], [94.1, 129.0], [94.2, 130.0], [94.3, 131.0], [94.4, 131.0], [94.5, 132.0], [94.6, 133.0], [94.7, 133.0], [94.8, 134.0], [94.9, 135.0], [95.0, 136.0], [95.1, 137.0], [95.2, 138.0], [95.3, 139.0], [95.4, 139.0], [95.5, 141.0], [95.6, 141.0], [95.7, 142.0], [95.8, 144.0], [95.9, 145.0], [96.0, 145.0], [96.1, 146.0], [96.2, 147.0], [96.3, 148.0], [96.4, 150.0], [96.5, 153.0], [96.6, 154.0], [96.7, 155.0], [96.8, 158.0], [96.9, 159.0], [97.0, 161.0], [97.1, 164.0], [97.2, 164.0], [97.3, 165.0], [97.4, 166.0], [97.5, 168.0], [97.6, 170.0], [97.7, 170.0], [97.8, 175.0], [97.9, 176.0], [98.0, 177.0], [98.1, 178.0], [98.2, 182.0], [98.3, 184.0], [98.4, 190.0], [98.5, 192.0], [98.6, 197.0], [98.7, 203.0], [98.8, 209.0], [98.9, 216.0], [99.0, 221.0], [99.1, 227.0], [99.2, 231.0], [99.3, 239.0], [99.4, 243.0], [99.5, 251.0], [99.6, 258.0], [99.7, 262.0], [99.8, 274.0], [99.9, 292.0], [100.0, 336.0]], "isOverall": false, "label": "Microservice-based client with caching", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 8846.0, "series": [{"data": [[0.0, 8846.0], [300.0, 7.0], [100.0, 1019.0], [200.0, 128.0]], "isOverall": false, "label": "Microservice-based client with caching", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 164.20349999999922, "minX": 1.66956354E12, "maxY": 164.20349999999922, "series": [{"data": [[1.66956354E12, 164.20349999999922]], "isOverall": false, "label": "client-to-gateway-caching (POST)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956354E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 235.0, "series": [{"data": [[3.0, 4.5], [4.0, 5.0], [5.0, 3.0], [6.0, 7.0], [15.0, 8.384615384615385], [16.0, 7.0], [18.0, 8.0], [19.0, 8.0], [20.0, 6.0], [23.0, 7.0], [25.0, 6.0], [26.0, 6.0], [27.0, 6.0], [28.0, 5.0], [29.0, 8.5], [31.0, 6.0], [33.0, 8.5], [32.0, 9.75], [35.0, 11.666666666666668], [34.0, 18.75], [37.0, 15.5], [36.0, 7.545454545454546], [39.0, 13.433333333333335], [38.0, 17.666666666666668], [40.0, 10.0], [41.0, 14.75], [43.0, 10.519230769230768], [42.0, 7.666666666666666], [44.0, 13.753623188405799], [45.0, 11.754098360655739], [47.0, 11.579710144927535], [46.0, 13.69512195121951], [49.0, 16.461538461538456], [48.0, 11.659090909090907], [51.0, 12.909090909090912], [50.0, 12.166666666666666], [53.0, 12.974358974358976], [52.0, 12.533333333333335], [55.0, 16.907407407407398], [54.0, 18.590909090909086], [57.0, 12.277777777777777], [56.0, 18.916666666666664], [59.0, 8.875], [58.0, 16.64516129032258], [61.0, 16.2], [60.0, 13.2], [63.0, 15.6875], [62.0, 18.0], [67.0, 16.789473684210524], [64.0, 13.956521739130434], [66.0, 20.687500000000004], [65.0, 18.807692307692303], [70.0, 10.777777777777779], [71.0, 15.942857142857143], [69.0, 12.210526315789473], [68.0, 18.33898305084746], [75.0, 17.555555555555557], [74.0, 14.780000000000001], [73.0, 15.607142857142856], [72.0, 20.82352941176471], [76.0, 9.333333333333336], [79.0, 31.0], [78.0, 6.0], [83.0, 17.580645161290324], [81.0, 10.5], [82.0, 12.210526315789473], [80.0, 19.0], [87.0, 24.555555555555554], [86.0, 19.178571428571427], [85.0, 27.265625000000004], [84.0, 24.8], [91.0, 16.6], [90.0, 19.523809523809522], [89.0, 26.185185185185187], [88.0, 18.225806451612907], [95.0, 15.76], [94.0, 25.1025641025641], [93.0, 26.18181818181818], [92.0, 16.700000000000003], [99.0, 21.90625], [96.0, 13.470588235294118], [98.0, 24.32558139534883], [97.0, 22.379310344827587], [103.0, 23.012987012987008], [102.0, 21.4375], [101.0, 17.41860465116279], [100.0, 24.038461538461537], [105.0, 28.12765957446809], [104.0, 22.465116279069772], [106.0, 22.647058823529417], [107.0, 22.0], [111.0, 22.250000000000007], [109.0, 18.999999999999996], [108.0, 22.75], [110.0, 20.95454545454545], [112.0, 27.153846153846157], [113.0, 30.266666666666666], [115.0, 27.484848484848488], [114.0, 29.29787234042554], [117.0, 30.30769230769231], [118.0, 28.209677419354843], [119.0, 28.399999999999995], [116.0, 25.872727272727275], [123.0, 31.17241379310345], [121.0, 24.51612903225806], [120.0, 26.919463087248324], [122.0, 26.661417322834648], [126.0, 29.666666666666664], [127.0, 29.03389830508474], [124.0, 30.22400000000001], [125.0, 29.471074380165284], [134.0, 27.14646464646465], [133.0, 29.62264150943396], [132.0, 28.61240310077519], [130.0, 25.497142857142858], [129.0, 31.864628820960696], [128.0, 27.156069364161855], [131.0, 27.98373983739838], [135.0, 28.315789473684205], [143.0, 31.931034482758612], [141.0, 32.125], [139.0, 30.252747252747252], [142.0, 22.893939393939394], [138.0, 26.905797101449277], [137.0, 29.889423076923062], [140.0, 31.36274509803921], [136.0, 25.553846153846152], [151.0, 38.75510204081633], [150.0, 35.4927536231884], [148.0, 41.90243902439024], [147.0, 44.4920634920635], [145.0, 36.66666666666666], [149.0, 37.28125], [144.0, 35.285714285714285], [146.0, 37.72], [159.0, 27.424999999999997], [158.0, 29.91176470588236], [154.0, 24.444444444444446], [153.0, 26.442622950819665], [152.0, 23.161764705882355], [155.0, 25.25373134328357], [156.0, 30.411764705882355], [157.0, 30.205479452054806], [161.0, 48.56521739130435], [162.0, 34.10526315789473], [165.0, 86.16981132075472], [166.0, 57.47368421052633], [167.0, 167.75000000000006], [164.0, 24.24657534246576], [163.0, 26.448275862068964], [160.0, 24.333333333333336], [168.0, 69.38888888888889], [171.0, 235.0], [174.0, 98.33333333333334], [175.0, 35.5625], [173.0, 62.0], [172.0, 39.0], [177.0, 169.13636363636363], [181.0, 97.80952380952382], [182.0, 37.46153846153846], [183.0, 62.599999999999994], [180.0, 25.142857142857142], [179.0, 44.87499999999999], [178.0, 37.166666666666664], [176.0, 24.153846153846153], [184.0, 43.6], [185.0, 44.846153846153854], [191.0, 48.54545454545455], [189.0, 45.913043478260875], [188.0, 28.5], [186.0, 31.82608695652173], [187.0, 24.0], [194.0, 87.31147540983608], [196.0, 48.67857142857142], [197.0, 62.878787878787875], [198.0, 115.21428571428572], [199.0, 106.78260869565219], [195.0, 43.86666666666667], [193.0, 57.92307692307692], [192.0, 41.869565217391305], [200.0, 147.8965517241379], [201.0, 114.70000000000002], [202.0, 164.0], [204.0, 98.39999999999999], [205.0, 142.6], [207.0, 74.1698113207547], [206.0, 52.00000000000001], [203.0, 39.75], [208.0, 102.0], [210.0, 114.05555555555556], [211.0, 106.81818181818181], [212.0, 212.0], [213.0, 56.625], [215.0, 56.66666666666666], [214.0, 54.600000000000016], [216.0, 68.69999999999999], [217.0, 92.41095890410956], [218.0, 92.22480620155042], [219.0, 54.815789473684205], [220.0, 60.875], [221.0, 63.07894736842106], [222.0, 62.61904761904761], [223.0, 71.77777777777777], [226.0, 84.0], [227.0, 115.8], [228.0, 101.28571428571429], [229.0, 100.4], [230.0, 68.0], [225.0, 125.33333333333333], [233.0, 69.14285714285715], [234.0, 86.6], [235.0, 99.11494252873564], [239.0, 99.24242424242425], [238.0, 83.66666666666667], [237.0, 79.33333333333333], [236.0, 52.0], [240.0, 81.6], [241.0, 88.75], [247.0, 43.5], [245.0, 48.166666666666664], [244.0, 59.30769230769231], [243.0, 60.04545454545454], [242.0, 65.94736842105264], [249.0, 80.30769230769232], [250.0, 95.30434782608697], [251.0, 76.75], [252.0, 103.54054054054053], [253.0, 97.95454545454547], [255.0, 58.77777777777778], [254.0, 73.34782608695653], [248.0, 54.00000000000001], [271.0, 90.95384615384614], [265.0, 82.54999999999998], [266.0, 99.86792452830184], [267.0, 88.06060606060606], [270.0, 73.19999999999999], [268.0, 63.83333333333333], [258.0, 39.0], [269.0, 67.18749999999999], [264.0, 88.0], [263.0, 75.0], [262.0, 140.5], [261.0, 62.42857142857143], [260.0, 46.0], [273.0, 88.73913043478264], [272.0, 90.0], [274.0, 81.3333333333333], [284.0, 47.2], [275.0, 77.0], [276.0, 76.94444444444447], [277.0, 81.18181818181817], [278.0, 89.71428571428572], [282.0, 65.9111111111111], [281.0, 57.125], [280.0, 53.0], [285.0, 51.07142857142857], [287.0, 98.94736842105262], [286.0, 41.692307692307686], [288.0, 99.0], [295.0, 84.4375], [296.0, 87.48275862068967], [297.0, 107.71428571428571], [298.0, 121.76923076923076], [300.0, 79.29166666666666], [303.0, 127.9375], [294.0, 50.0], [293.0, 50.0], [307.0, 105.43750000000001], [304.0, 120.36904761904763], [305.0, 138.54545454545456], [306.0, 93.21428571428572], [311.0, 74.61538461538461], [309.0, 38.25], [312.0, 38.77777777777777], [318.0, 115.14285714285714], [319.0, 87.5], [314.0, 107.08333333333333], [315.0, 74.59459459459461], [316.0, 125.55000000000001], [317.0, 91.81481481481482], [332.0, 111.39655172413791], [322.0, 99.54901960784312], [323.0, 93.4090909090909], [333.0, 106.3076923076923], [335.0, 101.50000000000001], [334.0, 105.12903225806451], [324.0, 96.0], [325.0, 121.0], [326.0, 131.86956521739128], [327.0, 140.8235294117647], [328.0, 140.57142857142856], [329.0, 138.9047619047619], [330.0, 111.96791443850265], [331.0, 84.05797101449276], [336.0, 96.83333333333336], [339.0, 92.0], [337.0, 64.6], [338.0, 73.7], [1.0, 3.0]], "isOverall": false, "label": "Microservice-based client with caching", "isController": false}, {"data": [[164.20349999999945, 47.52270000000024]], "isOverall": false, "label": "Microservice-based client with caching-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 339.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9833.333333333334, "minX": 1.66956354E12, "maxY": 50166.666666666664, "series": [{"data": [[1.66956354E12, 9833.333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66956354E12, 50166.666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956354E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 47.52270000000024, "minX": 1.66956354E12, "maxY": 47.52270000000024, "series": [{"data": [[1.66956354E12, 47.52270000000024]], "isOverall": false, "label": "Microservice-based client with caching", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956354E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 47.12499999999987, "minX": 1.66956354E12, "maxY": 47.12499999999987, "series": [{"data": [[1.66956354E12, 47.12499999999987]], "isOverall": false, "label": "Microservice-based client with caching", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956354E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8664000000000014, "minX": 1.66956354E12, "maxY": 0.8664000000000014, "series": [{"data": [[1.66956354E12, 0.8664000000000014]], "isOverall": false, "label": "Microservice-based client with caching", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956354E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.66956354E12, "maxY": 336.0, "series": [{"data": [[1.66956354E12, 336.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66956354E12, 106.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66956354E12, 221.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66956354E12, 136.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66956354E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66956354E12, 32.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 21.0, "minX": 559.0, "maxY": 106.0, "series": [{"data": [[559.0, 106.0], [2321.0, 25.0], [3265.0, 73.0], [3855.0, 21.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3855.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 21.0, "minX": 559.0, "maxY": 106.0, "series": [{"data": [[559.0, 106.0], [2321.0, 25.0], [3265.0, 72.0], [3855.0, 21.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3855.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956354E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956354E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956354E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956354E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956354E12, 166.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66956354E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956354E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956354E12, 166.66666666666666]], "isOverall": false, "label": "Microservice-based client with caching-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956354E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.66956354E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66956354E12, 166.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66956354E12, "title": "Total Transactions Per Second"}},
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

