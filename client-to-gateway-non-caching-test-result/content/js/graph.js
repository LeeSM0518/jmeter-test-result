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
        data: {"result": {"minY": 5787.0, "minX": 0.0, "maxY": 62326.0, "series": [{"data": [[0.0, 5787.0], [0.1, 5787.0], [0.2, 5787.0], [0.3, 5787.0], [0.4, 5787.0], [0.5, 5787.0], [0.6, 5787.0], [0.7, 5787.0], [0.8, 5787.0], [0.9, 5787.0], [1.0, 5845.0], [1.1, 5845.0], [1.2, 5845.0], [1.3, 5845.0], [1.4, 5845.0], [1.5, 5845.0], [1.6, 5845.0], [1.7, 5845.0], [1.8, 5845.0], [1.9, 5845.0], [2.0, 6269.0], [2.1, 6269.0], [2.2, 6269.0], [2.3, 6269.0], [2.4, 6269.0], [2.5, 6269.0], [2.6, 6269.0], [2.7, 6269.0], [2.8, 6269.0], [2.9, 6269.0], [3.0, 6439.0], [3.1, 6439.0], [3.2, 6439.0], [3.3, 6439.0], [3.4, 6439.0], [3.5, 6439.0], [3.6, 6439.0], [3.7, 6439.0], [3.8, 6439.0], [3.9, 6439.0], [4.0, 6504.0], [4.1, 6504.0], [4.2, 6504.0], [4.3, 6504.0], [4.4, 6504.0], [4.5, 6504.0], [4.6, 6504.0], [4.7, 6504.0], [4.8, 6504.0], [4.9, 6504.0], [5.0, 6711.0], [5.1, 6711.0], [5.2, 6711.0], [5.3, 6711.0], [5.4, 6711.0], [5.5, 6711.0], [5.6, 6711.0], [5.7, 6711.0], [5.8, 6711.0], [5.9, 6711.0], [6.0, 6821.0], [6.1, 6821.0], [6.2, 6821.0], [6.3, 6821.0], [6.4, 6821.0], [6.5, 6821.0], [6.6, 6821.0], [6.7, 6821.0], [6.8, 6821.0], [6.9, 6821.0], [7.0, 6864.0], [7.1, 6864.0], [7.2, 6864.0], [7.3, 6864.0], [7.4, 6864.0], [7.5, 6864.0], [7.6, 6864.0], [7.7, 6864.0], [7.8, 6864.0], [7.9, 6864.0], [8.0, 6966.0], [8.1, 6966.0], [8.2, 6966.0], [8.3, 6966.0], [8.4, 6966.0], [8.5, 6966.0], [8.6, 6966.0], [8.7, 6966.0], [8.8, 6966.0], [8.9, 6966.0], [9.0, 7637.0], [9.1, 7637.0], [9.2, 7637.0], [9.3, 7637.0], [9.4, 7637.0], [9.5, 7637.0], [9.6, 7637.0], [9.7, 7637.0], [9.8, 7637.0], [9.9, 7637.0], [10.0, 11827.0], [10.1, 11827.0], [10.2, 11827.0], [10.3, 11827.0], [10.4, 11827.0], [10.5, 11827.0], [10.6, 11827.0], [10.7, 11827.0], [10.8, 11827.0], [10.9, 11827.0], [11.0, 12240.0], [11.1, 12240.0], [11.2, 12240.0], [11.3, 12240.0], [11.4, 12240.0], [11.5, 12240.0], [11.6, 12240.0], [11.7, 12240.0], [11.8, 12240.0], [11.9, 12240.0], [12.0, 12794.0], [12.1, 12794.0], [12.2, 12794.0], [12.3, 12794.0], [12.4, 12794.0], [12.5, 12794.0], [12.6, 12794.0], [12.7, 12794.0], [12.8, 12794.0], [12.9, 12794.0], [13.0, 13162.0], [13.1, 13162.0], [13.2, 13162.0], [13.3, 13162.0], [13.4, 13162.0], [13.5, 13162.0], [13.6, 13162.0], [13.7, 13162.0], [13.8, 13162.0], [13.9, 13162.0], [14.0, 13257.0], [14.1, 13257.0], [14.2, 13257.0], [14.3, 13257.0], [14.4, 13257.0], [14.5, 13257.0], [14.6, 13257.0], [14.7, 13257.0], [14.8, 13257.0], [14.9, 13257.0], [15.0, 13348.0], [15.1, 13348.0], [15.2, 13348.0], [15.3, 13348.0], [15.4, 13348.0], [15.5, 13348.0], [15.6, 13348.0], [15.7, 13348.0], [15.8, 13348.0], [15.9, 13348.0], [16.0, 13499.0], [16.1, 13499.0], [16.2, 13499.0], [16.3, 13499.0], [16.4, 13499.0], [16.5, 13499.0], [16.6, 13499.0], [16.7, 13499.0], [16.8, 13499.0], [16.9, 13499.0], [17.0, 13831.0], [17.1, 13831.0], [17.2, 13831.0], [17.3, 13831.0], [17.4, 13831.0], [17.5, 13831.0], [17.6, 13831.0], [17.7, 13831.0], [17.8, 13831.0], [17.9, 13831.0], [18.0, 13907.0], [18.1, 13907.0], [18.2, 13907.0], [18.3, 13907.0], [18.4, 13907.0], [18.5, 13907.0], [18.6, 13907.0], [18.7, 13907.0], [18.8, 13907.0], [18.9, 13907.0], [19.0, 13918.0], [19.1, 13918.0], [19.2, 13918.0], [19.3, 13918.0], [19.4, 13918.0], [19.5, 13918.0], [19.6, 13918.0], [19.7, 13918.0], [19.8, 13918.0], [19.9, 13918.0], [20.0, 17041.0], [20.1, 17041.0], [20.2, 17041.0], [20.3, 17041.0], [20.4, 17041.0], [20.5, 17041.0], [20.6, 17041.0], [20.7, 17041.0], [20.8, 17041.0], [20.9, 17041.0], [21.0, 17236.0], [21.1, 17236.0], [21.2, 17236.0], [21.3, 17236.0], [21.4, 17236.0], [21.5, 17236.0], [21.6, 17236.0], [21.7, 17236.0], [21.8, 17236.0], [21.9, 17236.0], [22.0, 17843.0], [22.1, 17843.0], [22.2, 17843.0], [22.3, 17843.0], [22.4, 17843.0], [22.5, 17843.0], [22.6, 17843.0], [22.7, 17843.0], [22.8, 17843.0], [22.9, 17843.0], [23.0, 18124.0], [23.1, 18124.0], [23.2, 18124.0], [23.3, 18124.0], [23.4, 18124.0], [23.5, 18124.0], [23.6, 18124.0], [23.7, 18124.0], [23.8, 18124.0], [23.9, 18124.0], [24.0, 18336.0], [24.1, 18336.0], [24.2, 18336.0], [24.3, 18336.0], [24.4, 18336.0], [24.5, 18336.0], [24.6, 18336.0], [24.7, 18336.0], [24.8, 18336.0], [24.9, 18336.0], [25.0, 18641.0], [25.1, 18641.0], [25.2, 18641.0], [25.3, 18641.0], [25.4, 18641.0], [25.5, 18641.0], [25.6, 18641.0], [25.7, 18641.0], [25.8, 18641.0], [25.9, 18641.0], [26.0, 18741.0], [26.1, 18741.0], [26.2, 18741.0], [26.3, 18741.0], [26.4, 18741.0], [26.5, 18741.0], [26.6, 18741.0], [26.7, 18741.0], [26.8, 18741.0], [26.9, 18741.0], [27.0, 18824.0], [27.1, 18824.0], [27.2, 18824.0], [27.3, 18824.0], [27.4, 18824.0], [27.5, 18824.0], [27.6, 18824.0], [27.7, 18824.0], [27.8, 18824.0], [27.9, 18824.0], [28.0, 20250.0], [28.1, 20250.0], [28.2, 20250.0], [28.3, 20250.0], [28.4, 20250.0], [28.5, 20250.0], [28.6, 20250.0], [28.7, 20250.0], [28.8, 20250.0], [28.9, 20250.0], [29.0, 20311.0], [29.1, 20311.0], [29.2, 20311.0], [29.3, 20311.0], [29.4, 20311.0], [29.5, 20311.0], [29.6, 20311.0], [29.7, 20311.0], [29.8, 20311.0], [29.9, 20311.0], [30.0, 23003.0], [30.1, 23003.0], [30.2, 23003.0], [30.3, 23003.0], [30.4, 23003.0], [30.5, 23003.0], [30.6, 23003.0], [30.7, 23003.0], [30.8, 23003.0], [30.9, 23003.0], [31.0, 23600.0], [31.1, 23600.0], [31.2, 23600.0], [31.3, 23600.0], [31.4, 23600.0], [31.5, 23600.0], [31.6, 23600.0], [31.7, 23600.0], [31.8, 23600.0], [31.9, 23600.0], [32.0, 25522.0], [32.1, 25522.0], [32.2, 25522.0], [32.3, 25522.0], [32.4, 25522.0], [32.5, 25522.0], [32.6, 25522.0], [32.7, 25522.0], [32.8, 25522.0], [32.9, 25522.0], [33.0, 26123.0], [33.1, 26123.0], [33.2, 26123.0], [33.3, 26123.0], [33.4, 26123.0], [33.5, 26123.0], [33.6, 26123.0], [33.7, 26123.0], [33.8, 26123.0], [33.9, 26123.0], [34.0, 26160.0], [34.1, 26160.0], [34.2, 26160.0], [34.3, 26160.0], [34.4, 26160.0], [34.5, 26160.0], [34.6, 26160.0], [34.7, 26160.0], [34.8, 26160.0], [34.9, 26160.0], [35.0, 26178.0], [35.1, 26178.0], [35.2, 26178.0], [35.3, 26178.0], [35.4, 26178.0], [35.5, 26178.0], [35.6, 26178.0], [35.7, 26178.0], [35.8, 26178.0], [35.9, 26178.0], [36.0, 26251.0], [36.1, 26251.0], [36.2, 26251.0], [36.3, 26251.0], [36.4, 26251.0], [36.5, 26251.0], [36.6, 26251.0], [36.7, 26251.0], [36.8, 26251.0], [36.9, 26251.0], [37.0, 26294.0], [37.1, 26294.0], [37.2, 26294.0], [37.3, 26294.0], [37.4, 26294.0], [37.5, 26294.0], [37.6, 26294.0], [37.7, 26294.0], [37.8, 26294.0], [37.9, 26294.0], [38.0, 26594.0], [38.1, 26594.0], [38.2, 26594.0], [38.3, 26594.0], [38.4, 26594.0], [38.5, 26594.0], [38.6, 26594.0], [38.7, 26594.0], [38.8, 26594.0], [38.9, 26594.0], [39.0, 26714.0], [39.1, 26714.0], [39.2, 26714.0], [39.3, 26714.0], [39.4, 26714.0], [39.5, 26714.0], [39.6, 26714.0], [39.7, 26714.0], [39.8, 26714.0], [39.9, 26714.0], [40.0, 29067.0], [40.1, 29067.0], [40.2, 29067.0], [40.3, 29067.0], [40.4, 29067.0], [40.5, 29067.0], [40.6, 29067.0], [40.7, 29067.0], [40.8, 29067.0], [40.9, 29067.0], [41.0, 29555.0], [41.1, 29555.0], [41.2, 29555.0], [41.3, 29555.0], [41.4, 29555.0], [41.5, 29555.0], [41.6, 29555.0], [41.7, 29555.0], [41.8, 29555.0], [41.9, 29555.0], [42.0, 31594.0], [42.1, 31594.0], [42.2, 31594.0], [42.3, 31594.0], [42.4, 31594.0], [42.5, 31594.0], [42.6, 31594.0], [42.7, 31594.0], [42.8, 31594.0], [42.9, 31594.0], [43.0, 31923.0], [43.1, 31923.0], [43.2, 31923.0], [43.3, 31923.0], [43.4, 31923.0], [43.5, 31923.0], [43.6, 31923.0], [43.7, 31923.0], [43.8, 31923.0], [43.9, 31923.0], [44.0, 31980.0], [44.1, 31980.0], [44.2, 31980.0], [44.3, 31980.0], [44.4, 31980.0], [44.5, 31980.0], [44.6, 31980.0], [44.7, 31980.0], [44.8, 31980.0], [44.9, 31980.0], [45.0, 32049.0], [45.1, 32049.0], [45.2, 32049.0], [45.3, 32049.0], [45.4, 32049.0], [45.5, 32049.0], [45.6, 32049.0], [45.7, 32049.0], [45.8, 32049.0], [45.9, 32049.0], [46.0, 32330.0], [46.1, 32330.0], [46.2, 32330.0], [46.3, 32330.0], [46.4, 32330.0], [46.5, 32330.0], [46.6, 32330.0], [46.7, 32330.0], [46.8, 32330.0], [46.9, 32330.0], [47.0, 32489.0], [47.1, 32489.0], [47.2, 32489.0], [47.3, 32489.0], [47.4, 32489.0], [47.5, 32489.0], [47.6, 32489.0], [47.7, 32489.0], [47.8, 32489.0], [47.9, 32489.0], [48.0, 32664.0], [48.1, 32664.0], [48.2, 32664.0], [48.3, 32664.0], [48.4, 32664.0], [48.5, 32664.0], [48.6, 32664.0], [48.7, 32664.0], [48.8, 32664.0], [48.9, 32664.0], [49.0, 32864.0], [49.1, 32864.0], [49.2, 32864.0], [49.3, 32864.0], [49.4, 32864.0], [49.5, 32864.0], [49.6, 32864.0], [49.7, 32864.0], [49.8, 32864.0], [49.9, 32864.0], [50.0, 33658.0], [50.1, 33658.0], [50.2, 33658.0], [50.3, 33658.0], [50.4, 33658.0], [50.5, 33658.0], [50.6, 33658.0], [50.7, 33658.0], [50.8, 33658.0], [50.9, 33658.0], [51.0, 34647.0], [51.1, 34647.0], [51.2, 34647.0], [51.3, 34647.0], [51.4, 34647.0], [51.5, 34647.0], [51.6, 34647.0], [51.7, 34647.0], [51.8, 34647.0], [51.9, 34647.0], [52.0, 37817.0], [52.1, 37817.0], [52.2, 37817.0], [52.3, 37817.0], [52.4, 37817.0], [52.5, 37817.0], [52.6, 37817.0], [52.7, 37817.0], [52.8, 37817.0], [52.9, 37817.0], [53.0, 38037.0], [53.1, 38037.0], [53.2, 38037.0], [53.3, 38037.0], [53.4, 38037.0], [53.5, 38037.0], [53.6, 38037.0], [53.7, 38037.0], [53.8, 38037.0], [53.9, 38037.0], [54.0, 38120.0], [54.1, 38120.0], [54.2, 38120.0], [54.3, 38120.0], [54.4, 38120.0], [54.5, 38120.0], [54.6, 38120.0], [54.7, 38120.0], [54.8, 38120.0], [54.9, 38120.0], [55.0, 38336.0], [55.1, 38336.0], [55.2, 38336.0], [55.3, 38336.0], [55.4, 38336.0], [55.5, 38336.0], [55.6, 38336.0], [55.7, 38336.0], [55.8, 38336.0], [55.9, 38336.0], [56.0, 38530.0], [56.1, 38530.0], [56.2, 38530.0], [56.3, 38530.0], [56.4, 38530.0], [56.5, 38530.0], [56.6, 38530.0], [56.7, 38530.0], [56.8, 38530.0], [56.9, 38530.0], [57.0, 38585.0], [57.1, 38585.0], [57.2, 38585.0], [57.3, 38585.0], [57.4, 38585.0], [57.5, 38585.0], [57.6, 38585.0], [57.7, 38585.0], [57.8, 38585.0], [57.9, 38585.0], [58.0, 38654.0], [58.1, 38654.0], [58.2, 38654.0], [58.3, 38654.0], [58.4, 38654.0], [58.5, 38654.0], [58.6, 38654.0], [58.7, 38654.0], [58.8, 38654.0], [58.9, 38654.0], [59.0, 39076.0], [59.1, 39076.0], [59.2, 39076.0], [59.3, 39076.0], [59.4, 39076.0], [59.5, 39076.0], [59.6, 39076.0], [59.7, 39076.0], [59.8, 39076.0], [59.9, 39076.0], [60.0, 40064.0], [60.1, 40064.0], [60.2, 40064.0], [60.3, 40064.0], [60.4, 40064.0], [60.5, 40064.0], [60.6, 40064.0], [60.7, 40064.0], [60.8, 40064.0], [60.9, 40064.0], [61.0, 41007.0], [61.1, 41007.0], [61.2, 41007.0], [61.3, 41007.0], [61.4, 41007.0], [61.5, 41007.0], [61.6, 41007.0], [61.7, 41007.0], [61.8, 41007.0], [61.9, 41007.0], [62.0, 43056.0], [62.1, 43056.0], [62.2, 43056.0], [62.3, 43056.0], [62.4, 43056.0], [62.5, 43056.0], [62.6, 43056.0], [62.7, 43056.0], [62.8, 43056.0], [62.9, 43056.0], [63.0, 44572.0], [63.1, 44572.0], [63.2, 44572.0], [63.3, 44572.0], [63.4, 44572.0], [63.5, 44572.0], [63.6, 44572.0], [63.7, 44572.0], [63.8, 44572.0], [63.9, 44572.0], [64.0, 44870.0], [64.1, 44870.0], [64.2, 44870.0], [64.3, 44870.0], [64.4, 44870.0], [64.5, 44870.0], [64.6, 44870.0], [64.7, 44870.0], [64.8, 44870.0], [64.9, 44870.0], [65.0, 45105.0], [65.1, 45105.0], [65.2, 45105.0], [65.3, 45105.0], [65.4, 45105.0], [65.5, 45105.0], [65.6, 45105.0], [65.7, 45105.0], [65.8, 45105.0], [65.9, 45105.0], [66.0, 45286.0], [66.1, 45286.0], [66.2, 45286.0], [66.3, 45286.0], [66.4, 45286.0], [66.5, 45286.0], [66.6, 45286.0], [66.7, 45286.0], [66.8, 45286.0], [66.9, 45286.0], [67.0, 45480.0], [67.1, 45480.0], [67.2, 45480.0], [67.3, 45480.0], [67.4, 45480.0], [67.5, 45480.0], [67.6, 45480.0], [67.7, 45480.0], [67.8, 45480.0], [67.9, 45480.0], [68.0, 45515.0], [68.1, 45515.0], [68.2, 45515.0], [68.3, 45515.0], [68.4, 45515.0], [68.5, 45515.0], [68.6, 45515.0], [68.7, 45515.0], [68.8, 45515.0], [68.9, 45515.0], [69.0, 45737.0], [69.1, 45737.0], [69.2, 45737.0], [69.3, 45737.0], [69.4, 45737.0], [69.5, 45737.0], [69.6, 45737.0], [69.7, 45737.0], [69.8, 45737.0], [69.9, 45737.0], [70.0, 46571.0], [70.1, 46571.0], [70.2, 46571.0], [70.3, 46571.0], [70.4, 46571.0], [70.5, 46571.0], [70.6, 46571.0], [70.7, 46571.0], [70.8, 46571.0], [70.9, 46571.0], [71.0, 46658.0], [71.1, 46658.0], [71.2, 46658.0], [71.3, 46658.0], [71.4, 46658.0], [71.5, 46658.0], [71.6, 46658.0], [71.7, 46658.0], [71.8, 46658.0], [71.9, 46658.0], [72.0, 48918.0], [72.1, 48918.0], [72.2, 48918.0], [72.3, 48918.0], [72.4, 48918.0], [72.5, 48918.0], [72.6, 48918.0], [72.7, 48918.0], [72.8, 48918.0], [72.9, 48918.0], [73.0, 49842.0], [73.1, 49842.0], [73.2, 49842.0], [73.3, 49842.0], [73.4, 49842.0], [73.5, 49842.0], [73.6, 49842.0], [73.7, 49842.0], [73.8, 49842.0], [73.9, 49842.0], [74.0, 50043.0], [74.1, 50043.0], [74.2, 50043.0], [74.3, 50043.0], [74.4, 50043.0], [74.5, 50043.0], [74.6, 50043.0], [74.7, 50043.0], [74.8, 50043.0], [74.9, 50043.0], [75.0, 50829.0], [75.1, 50829.0], [75.2, 50829.0], [75.3, 50829.0], [75.4, 50829.0], [75.5, 50829.0], [75.6, 50829.0], [75.7, 50829.0], [75.8, 50829.0], [75.9, 50829.0], [76.0, 50859.0], [76.1, 50859.0], [76.2, 50859.0], [76.3, 50859.0], [76.4, 50859.0], [76.5, 50859.0], [76.6, 50859.0], [76.7, 50859.0], [76.8, 50859.0], [76.9, 50859.0], [77.0, 50945.0], [77.1, 50945.0], [77.2, 50945.0], [77.3, 50945.0], [77.4, 50945.0], [77.5, 50945.0], [77.6, 50945.0], [77.7, 50945.0], [77.8, 50945.0], [77.9, 50945.0], [78.0, 50963.0], [78.1, 50963.0], [78.2, 50963.0], [78.3, 50963.0], [78.4, 50963.0], [78.5, 50963.0], [78.6, 50963.0], [78.7, 50963.0], [78.8, 50963.0], [78.9, 50963.0], [79.0, 50975.0], [79.1, 50975.0], [79.2, 50975.0], [79.3, 50975.0], [79.4, 50975.0], [79.5, 50975.0], [79.6, 50975.0], [79.7, 50975.0], [79.8, 50975.0], [79.9, 50975.0], [80.0, 52781.0], [80.1, 52781.0], [80.2, 52781.0], [80.3, 52781.0], [80.4, 52781.0], [80.5, 52781.0], [80.6, 52781.0], [80.7, 52781.0], [80.8, 52781.0], [80.9, 52781.0], [81.0, 52800.0], [81.1, 52800.0], [81.2, 52800.0], [81.3, 52800.0], [81.4, 52800.0], [81.5, 52800.0], [81.6, 52800.0], [81.7, 52800.0], [81.8, 52800.0], [81.9, 52800.0], [82.0, 54588.0], [82.1, 54588.0], [82.2, 54588.0], [82.3, 54588.0], [82.4, 54588.0], [82.5, 54588.0], [82.6, 54588.0], [82.7, 54588.0], [82.8, 54588.0], [82.9, 54588.0], [83.0, 56654.0], [83.1, 56654.0], [83.2, 56654.0], [83.3, 56654.0], [83.4, 56654.0], [83.5, 56654.0], [83.6, 56654.0], [83.7, 56654.0], [83.8, 56654.0], [83.9, 56654.0], [84.0, 57093.0], [84.1, 57093.0], [84.2, 57093.0], [84.3, 57093.0], [84.4, 57093.0], [84.5, 57093.0], [84.6, 57093.0], [84.7, 57093.0], [84.8, 57093.0], [84.9, 57093.0], [85.0, 58033.0], [85.1, 58033.0], [85.2, 58033.0], [85.3, 58033.0], [85.4, 58033.0], [85.5, 58033.0], [85.6, 58033.0], [85.7, 58033.0], [85.8, 58033.0], [85.9, 58033.0], [86.0, 58198.0], [86.1, 58198.0], [86.2, 58198.0], [86.3, 58198.0], [86.4, 58198.0], [86.5, 58198.0], [86.6, 58198.0], [86.7, 58198.0], [86.8, 58198.0], [86.9, 58198.0], [87.0, 58437.0], [87.1, 58437.0], [87.2, 58437.0], [87.3, 58437.0], [87.4, 58437.0], [87.5, 58437.0], [87.6, 58437.0], [87.7, 58437.0], [87.8, 58437.0], [87.9, 58437.0], [88.0, 58561.0], [88.1, 58561.0], [88.2, 58561.0], [88.3, 58561.0], [88.4, 58561.0], [88.5, 58561.0], [88.6, 58561.0], [88.7, 58561.0], [88.8, 58561.0], [88.9, 58561.0], [89.0, 58573.0], [89.1, 58573.0], [89.2, 58573.0], [89.3, 58573.0], [89.4, 58573.0], [89.5, 58573.0], [89.6, 58573.0], [89.7, 58573.0], [89.8, 58573.0], [89.9, 58573.0], [90.0, 58620.0], [90.1, 58620.0], [90.2, 58620.0], [90.3, 58620.0], [90.4, 58620.0], [90.5, 58620.0], [90.6, 58620.0], [90.7, 58620.0], [90.8, 58620.0], [90.9, 58620.0], [91.0, 58950.0], [91.1, 58950.0], [91.2, 58950.0], [91.3, 58950.0], [91.4, 58950.0], [91.5, 58950.0], [91.6, 58950.0], [91.7, 58950.0], [91.8, 58950.0], [91.9, 58950.0], [92.0, 59948.0], [92.1, 59948.0], [92.2, 59948.0], [92.3, 59948.0], [92.4, 59948.0], [92.5, 59948.0], [92.6, 59948.0], [92.7, 59948.0], [92.8, 59948.0], [92.9, 59948.0], [93.0, 61761.0], [93.1, 61761.0], [93.2, 61761.0], [93.3, 61761.0], [93.4, 61761.0], [93.5, 61761.0], [93.6, 61761.0], [93.7, 61761.0], [93.8, 61761.0], [93.9, 61761.0], [94.0, 62018.0], [94.1, 62018.0], [94.2, 62018.0], [94.3, 62018.0], [94.4, 62018.0], [94.5, 62018.0], [94.6, 62018.0], [94.7, 62018.0], [94.8, 62018.0], [94.9, 62018.0], [95.0, 62033.0], [95.1, 62033.0], [95.2, 62033.0], [95.3, 62033.0], [95.4, 62033.0], [95.5, 62033.0], [95.6, 62033.0], [95.7, 62033.0], [95.8, 62033.0], [95.9, 62033.0], [96.0, 62100.0], [96.1, 62100.0], [96.2, 62100.0], [96.3, 62100.0], [96.4, 62100.0], [96.5, 62100.0], [96.6, 62100.0], [96.7, 62100.0], [96.8, 62100.0], [96.9, 62100.0], [97.0, 62272.0], [97.1, 62272.0], [97.2, 62272.0], [97.3, 62272.0], [97.4, 62272.0], [97.5, 62272.0], [97.6, 62272.0], [97.7, 62272.0], [97.8, 62272.0], [97.9, 62272.0], [98.0, 62278.0], [98.1, 62278.0], [98.2, 62278.0], [98.3, 62278.0], [98.4, 62278.0], [98.5, 62278.0], [98.6, 62278.0], [98.7, 62278.0], [98.8, 62278.0], [98.9, 62278.0], [99.0, 62326.0], [99.1, 62326.0], [99.2, 62326.0], [99.3, 62326.0], [99.4, 62326.0], [99.5, 62326.0], [99.6, 62326.0], [99.7, 62326.0], [99.8, 62326.0], [99.9, 62326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5700.0, "maxY": 3.0, "series": [{"data": [[5700.0, 1.0], [5800.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [6700.0, 1.0], [6800.0, 2.0], [6900.0, 1.0], [7600.0, 1.0], [11800.0, 1.0], [12200.0, 1.0], [12700.0, 1.0], [13100.0, 1.0], [13200.0, 1.0], [13300.0, 1.0], [13400.0, 1.0], [13800.0, 1.0], [13900.0, 2.0], [17000.0, 1.0], [17200.0, 1.0], [17800.0, 1.0], [18100.0, 1.0], [18300.0, 1.0], [18600.0, 1.0], [18700.0, 1.0], [18800.0, 1.0], [20200.0, 1.0], [20300.0, 1.0], [23000.0, 1.0], [23600.0, 1.0], [25500.0, 1.0], [26100.0, 3.0], [26200.0, 2.0], [26500.0, 1.0], [26700.0, 1.0], [29000.0, 1.0], [29500.0, 1.0], [31500.0, 1.0], [31900.0, 2.0], [32000.0, 1.0], [32300.0, 1.0], [32400.0, 1.0], [32600.0, 1.0], [32800.0, 1.0], [33600.0, 1.0], [34600.0, 1.0], [37800.0, 1.0], [38000.0, 1.0], [38100.0, 1.0], [38300.0, 1.0], [38500.0, 2.0], [38600.0, 1.0], [39000.0, 1.0], [40000.0, 1.0], [41000.0, 1.0], [43000.0, 1.0], [44500.0, 1.0], [44800.0, 1.0], [45100.0, 1.0], [45200.0, 1.0], [45400.0, 1.0], [45500.0, 1.0], [45700.0, 1.0], [46500.0, 1.0], [46600.0, 1.0], [48900.0, 1.0], [49800.0, 1.0], [50000.0, 1.0], [50800.0, 2.0], [50900.0, 3.0], [52700.0, 1.0], [52800.0, 1.0], [54500.0, 1.0], [56600.0, 1.0], [57000.0, 1.0], [58000.0, 1.0], [58100.0, 1.0], [58400.0, 1.0], [58500.0, 2.0], [58600.0, 1.0], [58900.0, 1.0], [59900.0, 1.0], [61700.0, 1.0], [62000.0, 2.0], [62100.0, 1.0], [62200.0, 2.0], [62300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 62300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 35.5, "minX": 1.66823586E12, "maxY": 85.5, "series": [{"data": [[1.66823586E12, 85.5], [1.66823592E12, 35.5]], "isOverall": false, "label": "client-to-gateway-non-caching", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823592E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5787.0, "minX": 1.0, "maxY": 62326.0, "series": [{"data": [[2.0, 62278.0], [3.0, 62272.0], [4.0, 62100.0], [5.0, 62033.0], [6.0, 62018.0], [7.0, 61761.0], [8.0, 59948.0], [9.0, 58950.0], [10.0, 58620.0], [11.0, 58573.0], [12.0, 58561.0], [13.0, 58437.0], [14.0, 58198.0], [15.0, 58033.0], [16.0, 57093.0], [17.0, 56654.0], [18.0, 54588.0], [19.0, 52800.0], [20.0, 52781.0], [21.0, 50963.0], [22.0, 50975.0], [23.0, 50945.0], [24.0, 50859.0], [25.0, 50829.0], [26.0, 50043.0], [27.0, 49842.0], [28.0, 48918.0], [29.0, 46658.0], [30.0, 46571.0], [31.0, 45737.0], [33.0, 45480.0], [32.0, 45515.0], [35.0, 45105.0], [34.0, 45286.0], [37.0, 44572.0], [36.0, 44870.0], [39.0, 41007.0], [38.0, 43056.0], [41.0, 39076.0], [40.0, 40064.0], [43.0, 38585.0], [42.0, 38654.0], [45.0, 38336.0], [44.0, 38530.0], [47.0, 38037.0], [46.0, 38120.0], [49.0, 34647.0], [48.0, 37817.0], [51.0, 32864.0], [50.0, 33658.0], [53.0, 32489.0], [52.0, 32664.0], [55.0, 32049.0], [54.0, 32330.0], [57.0, 31923.0], [56.0, 31980.0], [59.0, 29555.0], [58.0, 31594.0], [61.0, 26714.0], [60.0, 29067.0], [63.0, 26294.0], [62.0, 26594.0], [67.0, 26123.0], [66.0, 26160.0], [65.0, 26178.0], [64.0, 26251.0], [71.0, 20311.0], [70.0, 23003.0], [69.0, 23600.0], [68.0, 25522.0], [75.0, 18641.0], [74.0, 18741.0], [73.0, 18824.0], [72.0, 20250.0], [79.0, 17236.0], [78.0, 17843.0], [77.0, 18124.0], [76.0, 18336.0], [83.0, 13831.0], [82.0, 13907.0], [81.0, 13918.0], [80.0, 17041.0], [87.0, 13162.0], [86.0, 13257.0], [85.0, 13348.0], [84.0, 13499.0], [91.0, 7637.0], [90.0, 11827.0], [89.0, 12240.0], [88.0, 12794.0], [95.0, 6711.0], [94.0, 6821.0], [93.0, 6864.0], [92.0, 6966.0], [99.0, 5845.0], [98.0, 6269.0], [97.0, 6439.0], [96.0, 6504.0], [100.0, 5787.0], [1.0, 62326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.5, 34467.05999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 64.0, "minX": 1.66823586E12, "maxY": 1.322654685E7, "series": [{"data": [[1.66823586E12, 5668385.0], [1.66823592E12, 1.322654685E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66823586E12, 64.0], [1.66823592E12, 149.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823592E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 12765.766666666668, "minX": 1.66823586E12, "maxY": 43767.614285714284, "series": [{"data": [[1.66823586E12, 12765.766666666668], [1.66823592E12, 43767.614285714284]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823592E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 10551.066666666668, "minX": 1.66823586E12, "maxY": 41522.85714285714, "series": [{"data": [[1.66823586E12, 10551.066666666668], [1.66823592E12, 41522.85714285714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823592E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 27.06666666666667, "minX": 1.66823586E12, "maxY": 40.85714285714286, "series": [{"data": [[1.66823586E12, 27.06666666666667], [1.66823592E12, 40.85714285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823592E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5787.0, "minX": 1.66823586E12, "maxY": 62326.0, "series": [{"data": [[1.66823586E12, 20311.0], [1.66823592E12, 62326.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66823586E12, 18815.7], [1.66823592E12, 61579.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66823586E12, 20311.0], [1.66823592E12, 62326.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66823586E12, 20277.45], [1.66823592E12, 62177.4]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66823586E12, 5787.0], [1.66823592E12, 23003.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66823586E12, 13302.5], [1.66823592E12, 44987.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823592E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13499.0, "minX": 1.0, "maxY": 62018.0, "series": [{"data": [[2.0, 41304.5], [1.0, 33658.0], [4.0, 32576.5], [5.0, 45480.0], [6.0, 48637.0], [3.0, 62018.0], [7.0, 13499.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11432.0, "minX": 1.0, "maxY": 60305.0, "series": [{"data": [[2.0, 38657.5], [1.0, 31317.0], [4.0, 30665.0], [5.0, 43264.0], [6.0, 46321.0], [3.0, 60305.0], [7.0, 11432.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66823586E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66823586E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823586E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.66823586E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.66823586E12, 0.5], [1.66823592E12, 1.1666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823592E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.66823586E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.66823586E12, 0.5], [1.66823592E12, 1.1666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823592E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.66823586E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.66823586E12, 0.5], [1.66823592E12, 1.1666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823592E12, "title": "Total Transactions Per Second"}},
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

