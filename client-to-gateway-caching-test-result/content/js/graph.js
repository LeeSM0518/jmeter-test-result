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
        data: {"result": {"minY": 4934.0, "minX": 0.0, "maxY": 61386.0, "series": [{"data": [[0.0, 4934.0], [0.1, 4934.0], [0.2, 4934.0], [0.3, 4934.0], [0.4, 4934.0], [0.5, 4934.0], [0.6, 4934.0], [0.7, 4934.0], [0.8, 4934.0], [0.9, 4934.0], [1.0, 5765.0], [1.1, 5765.0], [1.2, 5765.0], [1.3, 5765.0], [1.4, 5765.0], [1.5, 5765.0], [1.6, 5765.0], [1.7, 5765.0], [1.8, 5765.0], [1.9, 5765.0], [2.0, 6053.0], [2.1, 6053.0], [2.2, 6053.0], [2.3, 6053.0], [2.4, 6053.0], [2.5, 6053.0], [2.6, 6053.0], [2.7, 6053.0], [2.8, 6053.0], [2.9, 6053.0], [3.0, 6470.0], [3.1, 6470.0], [3.2, 6470.0], [3.3, 6470.0], [3.4, 6470.0], [3.5, 6470.0], [3.6, 6470.0], [3.7, 6470.0], [3.8, 6470.0], [3.9, 6470.0], [4.0, 6504.0], [4.1, 6504.0], [4.2, 6504.0], [4.3, 6504.0], [4.4, 6504.0], [4.5, 6504.0], [4.6, 6504.0], [4.7, 6504.0], [4.8, 6504.0], [4.9, 6504.0], [5.0, 6591.0], [5.1, 6591.0], [5.2, 6591.0], [5.3, 6591.0], [5.4, 6591.0], [5.5, 6591.0], [5.6, 6591.0], [5.7, 6591.0], [5.8, 6591.0], [5.9, 6591.0], [6.0, 6773.0], [6.1, 6773.0], [6.2, 6773.0], [6.3, 6773.0], [6.4, 6773.0], [6.5, 6773.0], [6.6, 6773.0], [6.7, 6773.0], [6.8, 6773.0], [6.9, 6773.0], [7.0, 7055.0], [7.1, 7055.0], [7.2, 7055.0], [7.3, 7055.0], [7.4, 7055.0], [7.5, 7055.0], [7.6, 7055.0], [7.7, 7055.0], [7.8, 7055.0], [7.9, 7055.0], [8.0, 7072.0], [8.1, 7072.0], [8.2, 7072.0], [8.3, 7072.0], [8.4, 7072.0], [8.5, 7072.0], [8.6, 7072.0], [8.7, 7072.0], [8.8, 7072.0], [8.9, 7072.0], [9.0, 7178.0], [9.1, 7178.0], [9.2, 7178.0], [9.3, 7178.0], [9.4, 7178.0], [9.5, 7178.0], [9.6, 7178.0], [9.7, 7178.0], [9.8, 7178.0], [9.9, 7178.0], [10.0, 9939.0], [10.1, 9939.0], [10.2, 9939.0], [10.3, 9939.0], [10.4, 9939.0], [10.5, 9939.0], [10.6, 9939.0], [10.7, 9939.0], [10.8, 9939.0], [10.9, 9939.0], [11.0, 11446.0], [11.1, 11446.0], [11.2, 11446.0], [11.3, 11446.0], [11.4, 11446.0], [11.5, 11446.0], [11.6, 11446.0], [11.7, 11446.0], [11.8, 11446.0], [11.9, 11446.0], [12.0, 12139.0], [12.1, 12139.0], [12.2, 12139.0], [12.3, 12139.0], [12.4, 12139.0], [12.5, 12139.0], [12.6, 12139.0], [12.7, 12139.0], [12.8, 12139.0], [12.9, 12139.0], [13.0, 12206.0], [13.1, 12206.0], [13.2, 12206.0], [13.3, 12206.0], [13.4, 12206.0], [13.5, 12206.0], [13.6, 12206.0], [13.7, 12206.0], [13.8, 12206.0], [13.9, 12206.0], [14.0, 12752.0], [14.1, 12752.0], [14.2, 12752.0], [14.3, 12752.0], [14.4, 12752.0], [14.5, 12752.0], [14.6, 12752.0], [14.7, 12752.0], [14.8, 12752.0], [14.9, 12752.0], [15.0, 13051.0], [15.1, 13051.0], [15.2, 13051.0], [15.3, 13051.0], [15.4, 13051.0], [15.5, 13051.0], [15.6, 13051.0], [15.7, 13051.0], [15.8, 13051.0], [15.9, 13051.0], [16.0, 13550.0], [16.1, 13550.0], [16.2, 13550.0], [16.3, 13550.0], [16.4, 13550.0], [16.5, 13550.0], [16.6, 13550.0], [16.7, 13550.0], [16.8, 13550.0], [16.9, 13550.0], [17.0, 13709.0], [17.1, 13709.0], [17.2, 13709.0], [17.3, 13709.0], [17.4, 13709.0], [17.5, 13709.0], [17.6, 13709.0], [17.7, 13709.0], [17.8, 13709.0], [17.9, 13709.0], [18.0, 13729.0], [18.1, 13729.0], [18.2, 13729.0], [18.3, 13729.0], [18.4, 13729.0], [18.5, 13729.0], [18.6, 13729.0], [18.7, 13729.0], [18.8, 13729.0], [18.9, 13729.0], [19.0, 13736.0], [19.1, 13736.0], [19.2, 13736.0], [19.3, 13736.0], [19.4, 13736.0], [19.5, 13736.0], [19.6, 13736.0], [19.7, 13736.0], [19.8, 13736.0], [19.9, 13736.0], [20.0, 15492.0], [20.1, 15492.0], [20.2, 15492.0], [20.3, 15492.0], [20.4, 15492.0], [20.5, 15492.0], [20.6, 15492.0], [20.7, 15492.0], [20.8, 15492.0], [20.9, 15492.0], [21.0, 16232.0], [21.1, 16232.0], [21.2, 16232.0], [21.3, 16232.0], [21.4, 16232.0], [21.5, 16232.0], [21.6, 16232.0], [21.7, 16232.0], [21.8, 16232.0], [21.9, 16232.0], [22.0, 17117.0], [22.1, 17117.0], [22.2, 17117.0], [22.3, 17117.0], [22.4, 17117.0], [22.5, 17117.0], [22.6, 17117.0], [22.7, 17117.0], [22.8, 17117.0], [22.9, 17117.0], [23.0, 17145.0], [23.1, 17145.0], [23.2, 17145.0], [23.3, 17145.0], [23.4, 17145.0], [23.5, 17145.0], [23.6, 17145.0], [23.7, 17145.0], [23.8, 17145.0], [23.9, 17145.0], [24.0, 18154.0], [24.1, 18154.0], [24.2, 18154.0], [24.3, 18154.0], [24.4, 18154.0], [24.5, 18154.0], [24.6, 18154.0], [24.7, 18154.0], [24.8, 18154.0], [24.9, 18154.0], [25.0, 18166.0], [25.1, 18166.0], [25.2, 18166.0], [25.3, 18166.0], [25.4, 18166.0], [25.5, 18166.0], [25.6, 18166.0], [25.7, 18166.0], [25.8, 18166.0], [25.9, 18166.0], [26.0, 19708.0], [26.1, 19708.0], [26.2, 19708.0], [26.3, 19708.0], [26.4, 19708.0], [26.5, 19708.0], [26.6, 19708.0], [26.7, 19708.0], [26.8, 19708.0], [26.9, 19708.0], [27.0, 19797.0], [27.1, 19797.0], [27.2, 19797.0], [27.3, 19797.0], [27.4, 19797.0], [27.5, 19797.0], [27.6, 19797.0], [27.7, 19797.0], [27.8, 19797.0], [27.9, 19797.0], [28.0, 19807.0], [28.1, 19807.0], [28.2, 19807.0], [28.3, 19807.0], [28.4, 19807.0], [28.5, 19807.0], [28.6, 19807.0], [28.7, 19807.0], [28.8, 19807.0], [28.9, 19807.0], [29.0, 20149.0], [29.1, 20149.0], [29.2, 20149.0], [29.3, 20149.0], [29.4, 20149.0], [29.5, 20149.0], [29.6, 20149.0], [29.7, 20149.0], [29.8, 20149.0], [29.9, 20149.0], [30.0, 21352.0], [30.1, 21352.0], [30.2, 21352.0], [30.3, 21352.0], [30.4, 21352.0], [30.5, 21352.0], [30.6, 21352.0], [30.7, 21352.0], [30.8, 21352.0], [30.9, 21352.0], [31.0, 22256.0], [31.1, 22256.0], [31.2, 22256.0], [31.3, 22256.0], [31.4, 22256.0], [31.5, 22256.0], [31.6, 22256.0], [31.7, 22256.0], [31.8, 22256.0], [31.9, 22256.0], [32.0, 23700.0], [32.1, 23700.0], [32.2, 23700.0], [32.3, 23700.0], [32.4, 23700.0], [32.5, 23700.0], [32.6, 23700.0], [32.7, 23700.0], [32.8, 23700.0], [32.9, 23700.0], [33.0, 23852.0], [33.1, 23852.0], [33.2, 23852.0], [33.3, 23852.0], [33.4, 23852.0], [33.5, 23852.0], [33.6, 23852.0], [33.7, 23852.0], [33.8, 23852.0], [33.9, 23852.0], [34.0, 25896.0], [34.1, 25896.0], [34.2, 25896.0], [34.3, 25896.0], [34.4, 25896.0], [34.5, 25896.0], [34.6, 25896.0], [34.7, 25896.0], [34.8, 25896.0], [34.9, 25896.0], [35.0, 26331.0], [35.1, 26331.0], [35.2, 26331.0], [35.3, 26331.0], [35.4, 26331.0], [35.5, 26331.0], [35.6, 26331.0], [35.7, 26331.0], [35.8, 26331.0], [35.9, 26331.0], [36.0, 26393.0], [36.1, 26393.0], [36.2, 26393.0], [36.3, 26393.0], [36.4, 26393.0], [36.5, 26393.0], [36.6, 26393.0], [36.7, 26393.0], [36.8, 26393.0], [36.9, 26393.0], [37.0, 26407.0], [37.1, 26407.0], [37.2, 26407.0], [37.3, 26407.0], [37.4, 26407.0], [37.5, 26407.0], [37.6, 26407.0], [37.7, 26407.0], [37.8, 26407.0], [37.9, 26407.0], [38.0, 26841.0], [38.1, 26841.0], [38.2, 26841.0], [38.3, 26841.0], [38.4, 26841.0], [38.5, 26841.0], [38.6, 26841.0], [38.7, 26841.0], [38.8, 26841.0], [38.9, 26841.0], [39.0, 26933.0], [39.1, 26933.0], [39.2, 26933.0], [39.3, 26933.0], [39.4, 26933.0], [39.5, 26933.0], [39.6, 26933.0], [39.7, 26933.0], [39.8, 26933.0], [39.9, 26933.0], [40.0, 27892.0], [40.1, 27892.0], [40.2, 27892.0], [40.3, 27892.0], [40.4, 27892.0], [40.5, 27892.0], [40.6, 27892.0], [40.7, 27892.0], [40.8, 27892.0], [40.9, 27892.0], [41.0, 28567.0], [41.1, 28567.0], [41.2, 28567.0], [41.3, 28567.0], [41.4, 28567.0], [41.5, 28567.0], [41.6, 28567.0], [41.7, 28567.0], [41.8, 28567.0], [41.9, 28567.0], [42.0, 29409.0], [42.1, 29409.0], [42.2, 29409.0], [42.3, 29409.0], [42.4, 29409.0], [42.5, 29409.0], [42.6, 29409.0], [42.7, 29409.0], [42.8, 29409.0], [42.9, 29409.0], [43.0, 30045.0], [43.1, 30045.0], [43.2, 30045.0], [43.3, 30045.0], [43.4, 30045.0], [43.5, 30045.0], [43.6, 30045.0], [43.7, 30045.0], [43.8, 30045.0], [43.9, 30045.0], [44.0, 31418.0], [44.1, 31418.0], [44.2, 31418.0], [44.3, 31418.0], [44.4, 31418.0], [44.5, 31418.0], [44.6, 31418.0], [44.7, 31418.0], [44.8, 31418.0], [44.9, 31418.0], [45.0, 31445.0], [45.1, 31445.0], [45.2, 31445.0], [45.3, 31445.0], [45.4, 31445.0], [45.5, 31445.0], [45.6, 31445.0], [45.7, 31445.0], [45.8, 31445.0], [45.9, 31445.0], [46.0, 31583.0], [46.1, 31583.0], [46.2, 31583.0], [46.3, 31583.0], [46.4, 31583.0], [46.5, 31583.0], [46.6, 31583.0], [46.7, 31583.0], [46.8, 31583.0], [46.9, 31583.0], [47.0, 31718.0], [47.1, 31718.0], [47.2, 31718.0], [47.3, 31718.0], [47.4, 31718.0], [47.5, 31718.0], [47.6, 31718.0], [47.7, 31718.0], [47.8, 31718.0], [47.9, 31718.0], [48.0, 32141.0], [48.1, 32141.0], [48.2, 32141.0], [48.3, 32141.0], [48.4, 32141.0], [48.5, 32141.0], [48.6, 32141.0], [48.7, 32141.0], [48.8, 32141.0], [48.9, 32141.0], [49.0, 32211.0], [49.1, 32211.0], [49.2, 32211.0], [49.3, 32211.0], [49.4, 32211.0], [49.5, 32211.0], [49.6, 32211.0], [49.7, 32211.0], [49.8, 32211.0], [49.9, 32211.0], [50.0, 32975.0], [50.1, 32975.0], [50.2, 32975.0], [50.3, 32975.0], [50.4, 32975.0], [50.5, 32975.0], [50.6, 32975.0], [50.7, 32975.0], [50.8, 32975.0], [50.9, 32975.0], [51.0, 33623.0], [51.1, 33623.0], [51.2, 33623.0], [51.3, 33623.0], [51.4, 33623.0], [51.5, 33623.0], [51.6, 33623.0], [51.7, 33623.0], [51.8, 33623.0], [51.9, 33623.0], [52.0, 36064.0], [52.1, 36064.0], [52.2, 36064.0], [52.3, 36064.0], [52.4, 36064.0], [52.5, 36064.0], [52.6, 36064.0], [52.7, 36064.0], [52.8, 36064.0], [52.9, 36064.0], [53.0, 36124.0], [53.1, 36124.0], [53.2, 36124.0], [53.3, 36124.0], [53.4, 36124.0], [53.5, 36124.0], [53.6, 36124.0], [53.7, 36124.0], [53.8, 36124.0], [53.9, 36124.0], [54.0, 37446.0], [54.1, 37446.0], [54.2, 37446.0], [54.3, 37446.0], [54.4, 37446.0], [54.5, 37446.0], [54.6, 37446.0], [54.7, 37446.0], [54.8, 37446.0], [54.9, 37446.0], [55.0, 37623.0], [55.1, 37623.0], [55.2, 37623.0], [55.3, 37623.0], [55.4, 37623.0], [55.5, 37623.0], [55.6, 37623.0], [55.7, 37623.0], [55.8, 37623.0], [55.9, 37623.0], [56.0, 37735.0], [56.1, 37735.0], [56.2, 37735.0], [56.3, 37735.0], [56.4, 37735.0], [56.5, 37735.0], [56.6, 37735.0], [56.7, 37735.0], [56.8, 37735.0], [56.9, 37735.0], [57.0, 38223.0], [57.1, 38223.0], [57.2, 38223.0], [57.3, 38223.0], [57.4, 38223.0], [57.5, 38223.0], [57.6, 38223.0], [57.7, 38223.0], [57.8, 38223.0], [57.9, 38223.0], [58.0, 38796.0], [58.1, 38796.0], [58.2, 38796.0], [58.3, 38796.0], [58.4, 38796.0], [58.5, 38796.0], [58.6, 38796.0], [58.7, 38796.0], [58.8, 38796.0], [58.9, 38796.0], [59.0, 38983.0], [59.1, 38983.0], [59.2, 38983.0], [59.3, 38983.0], [59.4, 38983.0], [59.5, 38983.0], [59.6, 38983.0], [59.7, 38983.0], [59.8, 38983.0], [59.9, 38983.0], [60.0, 39614.0], [60.1, 39614.0], [60.2, 39614.0], [60.3, 39614.0], [60.4, 39614.0], [60.5, 39614.0], [60.6, 39614.0], [60.7, 39614.0], [60.8, 39614.0], [60.9, 39614.0], [61.0, 40099.0], [61.1, 40099.0], [61.2, 40099.0], [61.3, 40099.0], [61.4, 40099.0], [61.5, 40099.0], [61.6, 40099.0], [61.7, 40099.0], [61.8, 40099.0], [61.9, 40099.0], [62.0, 41756.0], [62.1, 41756.0], [62.2, 41756.0], [62.3, 41756.0], [62.4, 41756.0], [62.5, 41756.0], [62.6, 41756.0], [62.7, 41756.0], [62.8, 41756.0], [62.9, 41756.0], [63.0, 41759.0], [63.1, 41759.0], [63.2, 41759.0], [63.3, 41759.0], [63.4, 41759.0], [63.5, 41759.0], [63.6, 41759.0], [63.7, 41759.0], [63.8, 41759.0], [63.9, 41759.0], [64.0, 42998.0], [64.1, 42998.0], [64.2, 42998.0], [64.3, 42998.0], [64.4, 42998.0], [64.5, 42998.0], [64.6, 42998.0], [64.7, 42998.0], [64.8, 42998.0], [64.9, 42998.0], [65.0, 43143.0], [65.1, 43143.0], [65.2, 43143.0], [65.3, 43143.0], [65.4, 43143.0], [65.5, 43143.0], [65.6, 43143.0], [65.7, 43143.0], [65.8, 43143.0], [65.9, 43143.0], [66.0, 44349.0], [66.1, 44349.0], [66.2, 44349.0], [66.3, 44349.0], [66.4, 44349.0], [66.5, 44349.0], [66.6, 44349.0], [66.7, 44349.0], [66.8, 44349.0], [66.9, 44349.0], [67.0, 44922.0], [67.1, 44922.0], [67.2, 44922.0], [67.3, 44922.0], [67.4, 44922.0], [67.5, 44922.0], [67.6, 44922.0], [67.7, 44922.0], [67.8, 44922.0], [67.9, 44922.0], [68.0, 45106.0], [68.1, 45106.0], [68.2, 45106.0], [68.3, 45106.0], [68.4, 45106.0], [68.5, 45106.0], [68.6, 45106.0], [68.7, 45106.0], [68.8, 45106.0], [68.9, 45106.0], [69.0, 45622.0], [69.1, 45622.0], [69.2, 45622.0], [69.3, 45622.0], [69.4, 45622.0], [69.5, 45622.0], [69.6, 45622.0], [69.7, 45622.0], [69.8, 45622.0], [69.9, 45622.0], [70.0, 46175.0], [70.1, 46175.0], [70.2, 46175.0], [70.3, 46175.0], [70.4, 46175.0], [70.5, 46175.0], [70.6, 46175.0], [70.7, 46175.0], [70.8, 46175.0], [70.9, 46175.0], [71.0, 46802.0], [71.1, 46802.0], [71.2, 46802.0], [71.3, 46802.0], [71.4, 46802.0], [71.5, 46802.0], [71.6, 46802.0], [71.7, 46802.0], [71.8, 46802.0], [71.9, 46802.0], [72.0, 47900.0], [72.1, 47900.0], [72.2, 47900.0], [72.3, 47900.0], [72.4, 47900.0], [72.5, 47900.0], [72.6, 47900.0], [72.7, 47900.0], [72.8, 47900.0], [72.9, 47900.0], [73.0, 48704.0], [73.1, 48704.0], [73.2, 48704.0], [73.3, 48704.0], [73.4, 48704.0], [73.5, 48704.0], [73.6, 48704.0], [73.7, 48704.0], [73.8, 48704.0], [73.9, 48704.0], [74.0, 49343.0], [74.1, 49343.0], [74.2, 49343.0], [74.3, 49343.0], [74.4, 49343.0], [74.5, 49343.0], [74.6, 49343.0], [74.7, 49343.0], [74.8, 49343.0], [74.9, 49343.0], [75.0, 49615.0], [75.1, 49615.0], [75.2, 49615.0], [75.3, 49615.0], [75.4, 49615.0], [75.5, 49615.0], [75.6, 49615.0], [75.7, 49615.0], [75.8, 49615.0], [75.9, 49615.0], [76.0, 50360.0], [76.1, 50360.0], [76.2, 50360.0], [76.3, 50360.0], [76.4, 50360.0], [76.5, 50360.0], [76.6, 50360.0], [76.7, 50360.0], [76.8, 50360.0], [76.9, 50360.0], [77.0, 50640.0], [77.1, 50640.0], [77.2, 50640.0], [77.3, 50640.0], [77.4, 50640.0], [77.5, 50640.0], [77.6, 50640.0], [77.7, 50640.0], [77.8, 50640.0], [77.9, 50640.0], [78.0, 50801.0], [78.1, 50801.0], [78.2, 50801.0], [78.3, 50801.0], [78.4, 50801.0], [78.5, 50801.0], [78.6, 50801.0], [78.7, 50801.0], [78.8, 50801.0], [78.9, 50801.0], [79.0, 51901.0], [79.1, 51901.0], [79.2, 51901.0], [79.3, 51901.0], [79.4, 51901.0], [79.5, 51901.0], [79.6, 51901.0], [79.7, 51901.0], [79.8, 51901.0], [79.9, 51901.0], [80.0, 52455.0], [80.1, 52455.0], [80.2, 52455.0], [80.3, 52455.0], [80.4, 52455.0], [80.5, 52455.0], [80.6, 52455.0], [80.7, 52455.0], [80.8, 52455.0], [80.9, 52455.0], [81.0, 53585.0], [81.1, 53585.0], [81.2, 53585.0], [81.3, 53585.0], [81.4, 53585.0], [81.5, 53585.0], [81.6, 53585.0], [81.7, 53585.0], [81.8, 53585.0], [81.9, 53585.0], [82.0, 53891.0], [82.1, 53891.0], [82.2, 53891.0], [82.3, 53891.0], [82.4, 53891.0], [82.5, 53891.0], [82.6, 53891.0], [82.7, 53891.0], [82.8, 53891.0], [82.9, 53891.0], [83.0, 54134.0], [83.1, 54134.0], [83.2, 54134.0], [83.3, 54134.0], [83.4, 54134.0], [83.5, 54134.0], [83.6, 54134.0], [83.7, 54134.0], [83.8, 54134.0], [83.9, 54134.0], [84.0, 55902.0], [84.1, 55902.0], [84.2, 55902.0], [84.3, 55902.0], [84.4, 55902.0], [84.5, 55902.0], [84.6, 55902.0], [84.7, 55902.0], [84.8, 55902.0], [84.9, 55902.0], [85.0, 56223.0], [85.1, 56223.0], [85.2, 56223.0], [85.3, 56223.0], [85.4, 56223.0], [85.5, 56223.0], [85.6, 56223.0], [85.7, 56223.0], [85.8, 56223.0], [85.9, 56223.0], [86.0, 57066.0], [86.1, 57066.0], [86.2, 57066.0], [86.3, 57066.0], [86.4, 57066.0], [86.5, 57066.0], [86.6, 57066.0], [86.7, 57066.0], [86.8, 57066.0], [86.9, 57066.0], [87.0, 57404.0], [87.1, 57404.0], [87.2, 57404.0], [87.3, 57404.0], [87.4, 57404.0], [87.5, 57404.0], [87.6, 57404.0], [87.7, 57404.0], [87.8, 57404.0], [87.9, 57404.0], [88.0, 57527.0], [88.1, 57527.0], [88.2, 57527.0], [88.3, 57527.0], [88.4, 57527.0], [88.5, 57527.0], [88.6, 57527.0], [88.7, 57527.0], [88.8, 57527.0], [88.9, 57527.0], [89.0, 57783.0], [89.1, 57783.0], [89.2, 57783.0], [89.3, 57783.0], [89.4, 57783.0], [89.5, 57783.0], [89.6, 57783.0], [89.7, 57783.0], [89.8, 57783.0], [89.9, 57783.0], [90.0, 58677.0], [90.1, 58677.0], [90.2, 58677.0], [90.3, 58677.0], [90.4, 58677.0], [90.5, 58677.0], [90.6, 58677.0], [90.7, 58677.0], [90.8, 58677.0], [90.9, 58677.0], [91.0, 59514.0], [91.1, 59514.0], [91.2, 59514.0], [91.3, 59514.0], [91.4, 59514.0], [91.5, 59514.0], [91.6, 59514.0], [91.7, 59514.0], [91.8, 59514.0], [91.9, 59514.0], [92.0, 59523.0], [92.1, 59523.0], [92.2, 59523.0], [92.3, 59523.0], [92.4, 59523.0], [92.5, 59523.0], [92.6, 59523.0], [92.7, 59523.0], [92.8, 59523.0], [92.9, 59523.0], [93.0, 59559.0], [93.1, 59559.0], [93.2, 59559.0], [93.3, 59559.0], [93.4, 59559.0], [93.5, 59559.0], [93.6, 59559.0], [93.7, 59559.0], [93.8, 59559.0], [93.9, 59559.0], [94.0, 60782.0], [94.1, 60782.0], [94.2, 60782.0], [94.3, 60782.0], [94.4, 60782.0], [94.5, 60782.0], [94.6, 60782.0], [94.7, 60782.0], [94.8, 60782.0], [94.9, 60782.0], [95.0, 61260.0], [95.1, 61260.0], [95.2, 61260.0], [95.3, 61260.0], [95.4, 61260.0], [95.5, 61260.0], [95.6, 61260.0], [95.7, 61260.0], [95.8, 61260.0], [95.9, 61260.0], [96.0, 61260.0], [96.1, 61260.0], [96.2, 61260.0], [96.3, 61260.0], [96.4, 61260.0], [96.5, 61260.0], [96.6, 61260.0], [96.7, 61260.0], [96.8, 61260.0], [96.9, 61260.0], [97.0, 61336.0], [97.1, 61336.0], [97.2, 61336.0], [97.3, 61336.0], [97.4, 61336.0], [97.5, 61336.0], [97.6, 61336.0], [97.7, 61336.0], [97.8, 61336.0], [97.9, 61336.0], [98.0, 61383.0], [98.1, 61383.0], [98.2, 61383.0], [98.3, 61383.0], [98.4, 61383.0], [98.5, 61383.0], [98.6, 61383.0], [98.7, 61383.0], [98.8, 61383.0], [98.9, 61383.0], [99.0, 61386.0], [99.1, 61386.0], [99.2, 61386.0], [99.3, 61386.0], [99.4, 61386.0], [99.5, 61386.0], [99.6, 61386.0], [99.7, 61386.0], [99.8, 61386.0], [99.9, 61386.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4900.0, "maxY": 3.0, "series": [{"data": [[4900.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6400.0, 1.0], [6500.0, 2.0], [6700.0, 1.0], [7000.0, 2.0], [7100.0, 1.0], [9900.0, 1.0], [11400.0, 1.0], [12100.0, 1.0], [12200.0, 1.0], [12700.0, 1.0], [13000.0, 1.0], [13500.0, 1.0], [13700.0, 3.0], [15400.0, 1.0], [16200.0, 1.0], [17100.0, 2.0], [18100.0, 2.0], [19700.0, 2.0], [19800.0, 1.0], [20100.0, 1.0], [21300.0, 1.0], [22200.0, 1.0], [23700.0, 1.0], [23800.0, 1.0], [25800.0, 1.0], [26300.0, 2.0], [26400.0, 1.0], [26800.0, 1.0], [26900.0, 1.0], [27800.0, 1.0], [28500.0, 1.0], [29400.0, 1.0], [30000.0, 1.0], [31400.0, 2.0], [31500.0, 1.0], [31700.0, 1.0], [32100.0, 1.0], [32200.0, 1.0], [32900.0, 1.0], [33600.0, 1.0], [36000.0, 1.0], [36100.0, 1.0], [37400.0, 1.0], [37600.0, 1.0], [37700.0, 1.0], [38200.0, 1.0], [38700.0, 1.0], [38900.0, 1.0], [39600.0, 1.0], [40000.0, 1.0], [41700.0, 2.0], [42900.0, 1.0], [43100.0, 1.0], [44300.0, 1.0], [44900.0, 1.0], [45100.0, 1.0], [45600.0, 1.0], [46100.0, 1.0], [46800.0, 1.0], [47900.0, 1.0], [48700.0, 1.0], [49300.0, 1.0], [49600.0, 1.0], [50300.0, 1.0], [50600.0, 1.0], [50800.0, 1.0], [51900.0, 1.0], [52400.0, 1.0], [53500.0, 1.0], [53800.0, 1.0], [54100.0, 1.0], [55900.0, 1.0], [56200.0, 1.0], [57000.0, 1.0], [57400.0, 1.0], [57500.0, 1.0], [57700.0, 1.0], [58600.0, 1.0], [59500.0, 3.0], [60700.0, 1.0], [61200.0, 2.0], [61300.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 61300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 30.516666666666666, "minX": 1.66823736E12, "maxY": 80.5, "series": [{"data": [[1.66823736E12, 80.5], [1.66823742E12, 30.516666666666666]], "isOverall": false, "label": "client-to-gateway-caching", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823742E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4934.0, "minX": 1.0, "maxY": 61386.0, "series": [{"data": [[2.0, 61383.0], [3.0, 61336.0], [5.0, 61260.0], [6.0, 60782.0], [7.0, 59559.0], [8.0, 59523.0], [9.0, 59514.0], [10.0, 58677.0], [11.0, 57783.0], [12.0, 57527.0], [13.0, 57404.0], [14.0, 57066.0], [15.0, 56223.0], [16.0, 55902.0], [17.0, 54134.0], [18.0, 53891.0], [19.0, 53585.0], [20.0, 52455.0], [21.0, 51901.0], [22.0, 50801.0], [23.0, 50640.0], [24.0, 50360.0], [25.0, 49615.0], [26.0, 49343.0], [27.0, 48704.0], [28.0, 47900.0], [29.0, 46802.0], [30.0, 46175.0], [31.0, 45622.0], [33.0, 44922.0], [32.0, 45106.0], [35.0, 43143.0], [34.0, 44349.0], [37.0, 41759.0], [36.0, 42998.0], [39.0, 40099.0], [38.0, 41756.0], [41.0, 38983.0], [40.0, 39614.0], [43.0, 38223.0], [42.0, 38796.0], [45.0, 37623.0], [44.0, 37735.0], [47.0, 36124.0], [46.0, 37446.0], [49.0, 33623.0], [48.0, 36064.0], [51.0, 32211.0], [50.0, 32975.0], [53.0, 31718.0], [52.0, 32141.0], [55.0, 31445.0], [54.0, 31583.0], [57.0, 30045.0], [56.0, 31418.0], [59.0, 28567.0], [58.0, 29409.0], [61.0, 26933.0], [60.0, 27892.0], [63.0, 26407.0], [62.0, 26841.0], [67.0, 23852.0], [66.0, 25896.0], [65.0, 26331.0], [64.0, 26393.0], [71.0, 20149.0], [70.0, 21352.0], [69.0, 22256.0], [68.0, 23700.0], [75.0, 18166.0], [74.0, 19708.0], [73.0, 19807.0], [72.0, 19797.0], [79.0, 16232.0], [78.0, 17117.0], [77.0, 17145.0], [76.0, 18154.0], [83.0, 13709.0], [82.0, 13729.0], [81.0, 13736.0], [80.0, 15492.0], [87.0, 12206.0], [86.0, 12752.0], [85.0, 13051.0], [84.0, 13550.0], [91.0, 7178.0], [90.0, 9939.0], [89.0, 11446.0], [88.0, 12139.0], [95.0, 6591.0], [94.0, 6773.0], [93.0, 7055.0], [92.0, 7072.0], [99.0, 5765.0], [98.0, 6053.0], [97.0, 6470.0], [96.0, 6504.0], [100.0, 4934.0], [1.0, 61386.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.510000000000005, 33786.6]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 128.0, "minX": 1.66823736E12, "maxY": 1.1336760266666668E7, "series": [{"data": [[1.66823736E12, 7558033.116666666], [1.66823742E12, 1.1336760266666668E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66823736E12, 128.0], [1.66823742E12, 192.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823742E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15559.499999999998, "minX": 1.66823736E12, "maxY": 45937.99999999999, "series": [{"data": [[1.66823736E12, 15559.499999999998], [1.66823742E12, 45937.99999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823742E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13178.475000000002, "minX": 1.66823736E12, "maxY": 43633.71666666666, "series": [{"data": [[1.66823736E12, 13178.475000000002], [1.66823742E12, 43633.71666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823742E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 65.85000000000002, "minX": 1.66823736E12, "maxY": 71.06666666666665, "series": [{"data": [[1.66823736E12, 65.85000000000002], [1.66823742E12, 71.06666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823742E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4934.0, "minX": 1.66823736E12, "maxY": 61386.0, "series": [{"data": [[1.66823736E12, 26933.0], [1.66823742E12, 61386.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66823736E12, 26386.8], [1.66823742E12, 60659.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66823736E12, 26933.0], [1.66823742E12, 61386.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66823736E12, 26819.3], [1.66823742E12, 61332.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66823736E12, 4934.0], [1.66823742E12, 27892.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66823736E12, 14614.0], [1.66823742E12, 45898.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823742E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6773.0, "minX": 1.0, "maxY": 55769.0, "series": [{"data": [[1.0, 40212.5], [2.0, 33054.5], [4.0, 19802.0], [5.0, 26407.0], [3.0, 55769.0], [6.0, 31650.5], [7.0, 6773.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4645.0, "minX": 1.0, "maxY": 52949.5, "series": [{"data": [[1.0, 37719.0], [2.0, 30032.5], [4.0, 16758.5], [5.0, 24189.0], [3.0, 52949.5], [6.0, 29767.5], [7.0, 4645.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66823736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66823736E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66823736E12, "maxY": 1.0, "series": [{"data": [[1.66823736E12, 0.6666666666666666], [1.66823742E12, 1.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823742E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66823736E12, "maxY": 1.0, "series": [{"data": [[1.66823736E12, 0.6666666666666666], [1.66823742E12, 1.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823742E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66823736E12, "maxY": 1.0, "series": [{"data": [[1.66823736E12, 0.6666666666666666], [1.66823742E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823742E12, "title": "Total Transactions Per Second"}},
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

