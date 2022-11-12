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
        data: {"result": {"minY": 5383.0, "minX": 0.0, "maxY": 59504.0, "series": [{"data": [[0.0, 5383.0], [0.1, 5383.0], [0.2, 5383.0], [0.3, 5383.0], [0.4, 5383.0], [0.5, 5383.0], [0.6, 5383.0], [0.7, 5383.0], [0.8, 5383.0], [0.9, 5383.0], [1.0, 6380.0], [1.1, 6380.0], [1.2, 6380.0], [1.3, 6380.0], [1.4, 6380.0], [1.5, 6380.0], [1.6, 6380.0], [1.7, 6380.0], [1.8, 6380.0], [1.9, 6380.0], [2.0, 6393.0], [2.1, 6393.0], [2.2, 6393.0], [2.3, 6393.0], [2.4, 6393.0], [2.5, 6393.0], [2.6, 6393.0], [2.7, 6393.0], [2.8, 6393.0], [2.9, 6393.0], [3.0, 6891.0], [3.1, 6891.0], [3.2, 6891.0], [3.3, 6891.0], [3.4, 6891.0], [3.5, 6891.0], [3.6, 6891.0], [3.7, 6891.0], [3.8, 6891.0], [3.9, 6891.0], [4.0, 6918.0], [4.1, 6918.0], [4.2, 6918.0], [4.3, 6918.0], [4.4, 6918.0], [4.5, 6918.0], [4.6, 6918.0], [4.7, 6918.0], [4.8, 6918.0], [4.9, 6918.0], [5.0, 7197.0], [5.1, 7197.0], [5.2, 7197.0], [5.3, 7197.0], [5.4, 7197.0], [5.5, 7197.0], [5.6, 7197.0], [5.7, 7197.0], [5.8, 7197.0], [5.9, 7197.0], [6.0, 7304.0], [6.1, 7304.0], [6.2, 7304.0], [6.3, 7304.0], [6.4, 7304.0], [6.5, 7304.0], [6.6, 7304.0], [6.7, 7304.0], [6.8, 7304.0], [6.9, 7304.0], [7.0, 7574.0], [7.1, 7574.0], [7.2, 7574.0], [7.3, 7574.0], [7.4, 7574.0], [7.5, 7574.0], [7.6, 7574.0], [7.7, 7574.0], [7.8, 7574.0], [7.9, 7574.0], [8.0, 7864.0], [8.1, 7864.0], [8.2, 7864.0], [8.3, 7864.0], [8.4, 7864.0], [8.5, 7864.0], [8.6, 7864.0], [8.7, 7864.0], [8.8, 7864.0], [8.9, 7864.0], [9.0, 7875.0], [9.1, 7875.0], [9.2, 7875.0], [9.3, 7875.0], [9.4, 7875.0], [9.5, 7875.0], [9.6, 7875.0], [9.7, 7875.0], [9.8, 7875.0], [9.9, 7875.0], [10.0, 10541.0], [10.1, 10541.0], [10.2, 10541.0], [10.3, 10541.0], [10.4, 10541.0], [10.5, 10541.0], [10.6, 10541.0], [10.7, 10541.0], [10.8, 10541.0], [10.9, 10541.0], [11.0, 11200.0], [11.1, 11200.0], [11.2, 11200.0], [11.3, 11200.0], [11.4, 11200.0], [11.5, 11200.0], [11.6, 11200.0], [11.7, 11200.0], [11.8, 11200.0], [11.9, 11200.0], [12.0, 11653.0], [12.1, 11653.0], [12.2, 11653.0], [12.3, 11653.0], [12.4, 11653.0], [12.5, 11653.0], [12.6, 11653.0], [12.7, 11653.0], [12.8, 11653.0], [12.9, 11653.0], [13.0, 12212.0], [13.1, 12212.0], [13.2, 12212.0], [13.3, 12212.0], [13.4, 12212.0], [13.5, 12212.0], [13.6, 12212.0], [13.7, 12212.0], [13.8, 12212.0], [13.9, 12212.0], [14.0, 12329.0], [14.1, 12329.0], [14.2, 12329.0], [14.3, 12329.0], [14.4, 12329.0], [14.5, 12329.0], [14.6, 12329.0], [14.7, 12329.0], [14.8, 12329.0], [14.9, 12329.0], [15.0, 12685.0], [15.1, 12685.0], [15.2, 12685.0], [15.3, 12685.0], [15.4, 12685.0], [15.5, 12685.0], [15.6, 12685.0], [15.7, 12685.0], [15.8, 12685.0], [15.9, 12685.0], [16.0, 12686.0], [16.1, 12686.0], [16.2, 12686.0], [16.3, 12686.0], [16.4, 12686.0], [16.5, 12686.0], [16.6, 12686.0], [16.7, 12686.0], [16.8, 12686.0], [16.9, 12686.0], [17.0, 12748.0], [17.1, 12748.0], [17.2, 12748.0], [17.3, 12748.0], [17.4, 12748.0], [17.5, 12748.0], [17.6, 12748.0], [17.7, 12748.0], [17.8, 12748.0], [17.9, 12748.0], [18.0, 12770.0], [18.1, 12770.0], [18.2, 12770.0], [18.3, 12770.0], [18.4, 12770.0], [18.5, 12770.0], [18.6, 12770.0], [18.7, 12770.0], [18.8, 12770.0], [18.9, 12770.0], [19.0, 13250.0], [19.1, 13250.0], [19.2, 13250.0], [19.3, 13250.0], [19.4, 13250.0], [19.5, 13250.0], [19.6, 13250.0], [19.7, 13250.0], [19.8, 13250.0], [19.9, 13250.0], [20.0, 15565.0], [20.1, 15565.0], [20.2, 15565.0], [20.3, 15565.0], [20.4, 15565.0], [20.5, 15565.0], [20.6, 15565.0], [20.7, 15565.0], [20.8, 15565.0], [20.9, 15565.0], [21.0, 16021.0], [21.1, 16021.0], [21.2, 16021.0], [21.3, 16021.0], [21.4, 16021.0], [21.5, 16021.0], [21.6, 16021.0], [21.7, 16021.0], [21.8, 16021.0], [21.9, 16021.0], [22.0, 16491.0], [22.1, 16491.0], [22.2, 16491.0], [22.3, 16491.0], [22.4, 16491.0], [22.5, 16491.0], [22.6, 16491.0], [22.7, 16491.0], [22.8, 16491.0], [22.9, 16491.0], [23.0, 18679.0], [23.1, 18679.0], [23.2, 18679.0], [23.3, 18679.0], [23.4, 18679.0], [23.5, 18679.0], [23.6, 18679.0], [23.7, 18679.0], [23.8, 18679.0], [23.9, 18679.0], [24.0, 18699.0], [24.1, 18699.0], [24.2, 18699.0], [24.3, 18699.0], [24.4, 18699.0], [24.5, 18699.0], [24.6, 18699.0], [24.7, 18699.0], [24.8, 18699.0], [24.9, 18699.0], [25.0, 18802.0], [25.1, 18802.0], [25.2, 18802.0], [25.3, 18802.0], [25.4, 18802.0], [25.5, 18802.0], [25.6, 18802.0], [25.7, 18802.0], [25.8, 18802.0], [25.9, 18802.0], [26.0, 18830.0], [26.1, 18830.0], [26.2, 18830.0], [26.3, 18830.0], [26.4, 18830.0], [26.5, 18830.0], [26.6, 18830.0], [26.7, 18830.0], [26.8, 18830.0], [26.9, 18830.0], [27.0, 19150.0], [27.1, 19150.0], [27.2, 19150.0], [27.3, 19150.0], [27.4, 19150.0], [27.5, 19150.0], [27.6, 19150.0], [27.7, 19150.0], [27.8, 19150.0], [27.9, 19150.0], [28.0, 19160.0], [28.1, 19160.0], [28.2, 19160.0], [28.3, 19160.0], [28.4, 19160.0], [28.5, 19160.0], [28.6, 19160.0], [28.7, 19160.0], [28.8, 19160.0], [28.9, 19160.0], [29.0, 19183.0], [29.1, 19183.0], [29.2, 19183.0], [29.3, 19183.0], [29.4, 19183.0], [29.5, 19183.0], [29.6, 19183.0], [29.7, 19183.0], [29.8, 19183.0], [29.9, 19183.0], [30.0, 22834.0], [30.1, 22834.0], [30.2, 22834.0], [30.3, 22834.0], [30.4, 22834.0], [30.5, 22834.0], [30.6, 22834.0], [30.7, 22834.0], [30.8, 22834.0], [30.9, 22834.0], [31.0, 22911.0], [31.1, 22911.0], [31.2, 22911.0], [31.3, 22911.0], [31.4, 22911.0], [31.5, 22911.0], [31.6, 22911.0], [31.7, 22911.0], [31.8, 22911.0], [31.9, 22911.0], [32.0, 23399.0], [32.1, 23399.0], [32.2, 23399.0], [32.3, 23399.0], [32.4, 23399.0], [32.5, 23399.0], [32.6, 23399.0], [32.7, 23399.0], [32.8, 23399.0], [32.9, 23399.0], [33.0, 25374.0], [33.1, 25374.0], [33.2, 25374.0], [33.3, 25374.0], [33.4, 25374.0], [33.5, 25374.0], [33.6, 25374.0], [33.7, 25374.0], [33.8, 25374.0], [33.9, 25374.0], [34.0, 25384.0], [34.1, 25384.0], [34.2, 25384.0], [34.3, 25384.0], [34.4, 25384.0], [34.5, 25384.0], [34.6, 25384.0], [34.7, 25384.0], [34.8, 25384.0], [34.9, 25384.0], [35.0, 25627.0], [35.1, 25627.0], [35.2, 25627.0], [35.3, 25627.0], [35.4, 25627.0], [35.5, 25627.0], [35.6, 25627.0], [35.7, 25627.0], [35.8, 25627.0], [35.9, 25627.0], [36.0, 25643.0], [36.1, 25643.0], [36.2, 25643.0], [36.3, 25643.0], [36.4, 25643.0], [36.5, 25643.0], [36.6, 25643.0], [36.7, 25643.0], [36.8, 25643.0], [36.9, 25643.0], [37.0, 25673.0], [37.1, 25673.0], [37.2, 25673.0], [37.3, 25673.0], [37.4, 25673.0], [37.5, 25673.0], [37.6, 25673.0], [37.7, 25673.0], [37.8, 25673.0], [37.9, 25673.0], [38.0, 25776.0], [38.1, 25776.0], [38.2, 25776.0], [38.3, 25776.0], [38.4, 25776.0], [38.5, 25776.0], [38.6, 25776.0], [38.7, 25776.0], [38.8, 25776.0], [38.9, 25776.0], [39.0, 26089.0], [39.1, 26089.0], [39.2, 26089.0], [39.3, 26089.0], [39.4, 26089.0], [39.5, 26089.0], [39.6, 26089.0], [39.7, 26089.0], [39.8, 26089.0], [39.9, 26089.0], [40.0, 28365.0], [40.1, 28365.0], [40.2, 28365.0], [40.3, 28365.0], [40.4, 28365.0], [40.5, 28365.0], [40.6, 28365.0], [40.7, 28365.0], [40.8, 28365.0], [40.9, 28365.0], [41.0, 28640.0], [41.1, 28640.0], [41.2, 28640.0], [41.3, 28640.0], [41.4, 28640.0], [41.5, 28640.0], [41.6, 28640.0], [41.7, 28640.0], [41.8, 28640.0], [41.9, 28640.0], [42.0, 28796.0], [42.1, 28796.0], [42.2, 28796.0], [42.3, 28796.0], [42.4, 28796.0], [42.5, 28796.0], [42.6, 28796.0], [42.7, 28796.0], [42.8, 28796.0], [42.9, 28796.0], [43.0, 30733.0], [43.1, 30733.0], [43.2, 30733.0], [43.3, 30733.0], [43.4, 30733.0], [43.5, 30733.0], [43.6, 30733.0], [43.7, 30733.0], [43.8, 30733.0], [43.9, 30733.0], [44.0, 30881.0], [44.1, 30881.0], [44.2, 30881.0], [44.3, 30881.0], [44.4, 30881.0], [44.5, 30881.0], [44.6, 30881.0], [44.7, 30881.0], [44.8, 30881.0], [44.9, 30881.0], [45.0, 30921.0], [45.1, 30921.0], [45.2, 30921.0], [45.3, 30921.0], [45.4, 30921.0], [45.5, 30921.0], [45.6, 30921.0], [45.7, 30921.0], [45.8, 30921.0], [45.9, 30921.0], [46.0, 30924.0], [46.1, 30924.0], [46.2, 30924.0], [46.3, 30924.0], [46.4, 30924.0], [46.5, 30924.0], [46.6, 30924.0], [46.7, 30924.0], [46.8, 30924.0], [46.9, 30924.0], [47.0, 31006.0], [47.1, 31006.0], [47.2, 31006.0], [47.3, 31006.0], [47.4, 31006.0], [47.5, 31006.0], [47.6, 31006.0], [47.7, 31006.0], [47.8, 31006.0], [47.9, 31006.0], [48.0, 31271.0], [48.1, 31271.0], [48.2, 31271.0], [48.3, 31271.0], [48.4, 31271.0], [48.5, 31271.0], [48.6, 31271.0], [48.7, 31271.0], [48.8, 31271.0], [48.9, 31271.0], [49.0, 31488.0], [49.1, 31488.0], [49.2, 31488.0], [49.3, 31488.0], [49.4, 31488.0], [49.5, 31488.0], [49.6, 31488.0], [49.7, 31488.0], [49.8, 31488.0], [49.9, 31488.0], [50.0, 33740.0], [50.1, 33740.0], [50.2, 33740.0], [50.3, 33740.0], [50.4, 33740.0], [50.5, 33740.0], [50.6, 33740.0], [50.7, 33740.0], [50.8, 33740.0], [50.9, 33740.0], [51.0, 34055.0], [51.1, 34055.0], [51.2, 34055.0], [51.3, 34055.0], [51.4, 34055.0], [51.5, 34055.0], [51.6, 34055.0], [51.7, 34055.0], [51.8, 34055.0], [51.9, 34055.0], [52.0, 34112.0], [52.1, 34112.0], [52.2, 34112.0], [52.3, 34112.0], [52.4, 34112.0], [52.5, 34112.0], [52.6, 34112.0], [52.7, 34112.0], [52.8, 34112.0], [52.9, 34112.0], [53.0, 36160.0], [53.1, 36160.0], [53.2, 36160.0], [53.3, 36160.0], [53.4, 36160.0], [53.5, 36160.0], [53.6, 36160.0], [53.7, 36160.0], [53.8, 36160.0], [53.9, 36160.0], [54.0, 36635.0], [54.1, 36635.0], [54.2, 36635.0], [54.3, 36635.0], [54.4, 36635.0], [54.5, 36635.0], [54.6, 36635.0], [54.7, 36635.0], [54.8, 36635.0], [54.9, 36635.0], [55.0, 36678.0], [55.1, 36678.0], [55.2, 36678.0], [55.3, 36678.0], [55.4, 36678.0], [55.5, 36678.0], [55.6, 36678.0], [55.7, 36678.0], [55.8, 36678.0], [55.9, 36678.0], [56.0, 37176.0], [56.1, 37176.0], [56.2, 37176.0], [56.3, 37176.0], [56.4, 37176.0], [56.5, 37176.0], [56.6, 37176.0], [56.7, 37176.0], [56.8, 37176.0], [56.9, 37176.0], [57.0, 37430.0], [57.1, 37430.0], [57.2, 37430.0], [57.3, 37430.0], [57.4, 37430.0], [57.5, 37430.0], [57.6, 37430.0], [57.7, 37430.0], [57.8, 37430.0], [57.9, 37430.0], [58.0, 37624.0], [58.1, 37624.0], [58.2, 37624.0], [58.3, 37624.0], [58.4, 37624.0], [58.5, 37624.0], [58.6, 37624.0], [58.7, 37624.0], [58.8, 37624.0], [58.9, 37624.0], [59.0, 37834.0], [59.1, 37834.0], [59.2, 37834.0], [59.3, 37834.0], [59.4, 37834.0], [59.5, 37834.0], [59.6, 37834.0], [59.7, 37834.0], [59.8, 37834.0], [59.9, 37834.0], [60.0, 38900.0], [60.1, 38900.0], [60.2, 38900.0], [60.3, 38900.0], [60.4, 38900.0], [60.5, 38900.0], [60.6, 38900.0], [60.7, 38900.0], [60.8, 38900.0], [60.9, 38900.0], [61.0, 39837.0], [61.1, 39837.0], [61.2, 39837.0], [61.3, 39837.0], [61.4, 39837.0], [61.5, 39837.0], [61.6, 39837.0], [61.7, 39837.0], [61.8, 39837.0], [61.9, 39837.0], [62.0, 40494.0], [62.1, 40494.0], [62.2, 40494.0], [62.3, 40494.0], [62.4, 40494.0], [62.5, 40494.0], [62.6, 40494.0], [62.7, 40494.0], [62.8, 40494.0], [62.9, 40494.0], [63.0, 41443.0], [63.1, 41443.0], [63.2, 41443.0], [63.3, 41443.0], [63.4, 41443.0], [63.5, 41443.0], [63.6, 41443.0], [63.7, 41443.0], [63.8, 41443.0], [63.9, 41443.0], [64.0, 43790.0], [64.1, 43790.0], [64.2, 43790.0], [64.3, 43790.0], [64.4, 43790.0], [64.5, 43790.0], [64.6, 43790.0], [64.7, 43790.0], [64.8, 43790.0], [64.9, 43790.0], [65.0, 43912.0], [65.1, 43912.0], [65.2, 43912.0], [65.3, 43912.0], [65.4, 43912.0], [65.5, 43912.0], [65.6, 43912.0], [65.7, 43912.0], [65.8, 43912.0], [65.9, 43912.0], [66.0, 43954.0], [66.1, 43954.0], [66.2, 43954.0], [66.3, 43954.0], [66.4, 43954.0], [66.5, 43954.0], [66.6, 43954.0], [66.7, 43954.0], [66.8, 43954.0], [66.9, 43954.0], [67.0, 44183.0], [67.1, 44183.0], [67.2, 44183.0], [67.3, 44183.0], [67.4, 44183.0], [67.5, 44183.0], [67.6, 44183.0], [67.7, 44183.0], [67.8, 44183.0], [67.9, 44183.0], [68.0, 44633.0], [68.1, 44633.0], [68.2, 44633.0], [68.3, 44633.0], [68.4, 44633.0], [68.5, 44633.0], [68.6, 44633.0], [68.7, 44633.0], [68.8, 44633.0], [68.9, 44633.0], [69.0, 44911.0], [69.1, 44911.0], [69.2, 44911.0], [69.3, 44911.0], [69.4, 44911.0], [69.5, 44911.0], [69.6, 44911.0], [69.7, 44911.0], [69.8, 44911.0], [69.9, 44911.0], [70.0, 45054.0], [70.1, 45054.0], [70.2, 45054.0], [70.3, 45054.0], [70.4, 45054.0], [70.5, 45054.0], [70.6, 45054.0], [70.7, 45054.0], [70.8, 45054.0], [70.9, 45054.0], [71.0, 45157.0], [71.1, 45157.0], [71.2, 45157.0], [71.3, 45157.0], [71.4, 45157.0], [71.5, 45157.0], [71.6, 45157.0], [71.7, 45157.0], [71.8, 45157.0], [71.9, 45157.0], [72.0, 45902.0], [72.1, 45902.0], [72.2, 45902.0], [72.3, 45902.0], [72.4, 45902.0], [72.5, 45902.0], [72.6, 45902.0], [72.7, 45902.0], [72.8, 45902.0], [72.9, 45902.0], [73.0, 47002.0], [73.1, 47002.0], [73.2, 47002.0], [73.3, 47002.0], [73.4, 47002.0], [73.5, 47002.0], [73.6, 47002.0], [73.7, 47002.0], [73.8, 47002.0], [73.9, 47002.0], [74.0, 48787.0], [74.1, 48787.0], [74.2, 48787.0], [74.3, 48787.0], [74.4, 48787.0], [74.5, 48787.0], [74.6, 48787.0], [74.7, 48787.0], [74.8, 48787.0], [74.9, 48787.0], [75.0, 48931.0], [75.1, 48931.0], [75.2, 48931.0], [75.3, 48931.0], [75.4, 48931.0], [75.5, 48931.0], [75.6, 48931.0], [75.7, 48931.0], [75.8, 48931.0], [75.9, 48931.0], [76.0, 49090.0], [76.1, 49090.0], [76.2, 49090.0], [76.3, 49090.0], [76.4, 49090.0], [76.5, 49090.0], [76.6, 49090.0], [76.7, 49090.0], [76.8, 49090.0], [76.9, 49090.0], [77.0, 49524.0], [77.1, 49524.0], [77.2, 49524.0], [77.3, 49524.0], [77.4, 49524.0], [77.5, 49524.0], [77.6, 49524.0], [77.7, 49524.0], [77.8, 49524.0], [77.9, 49524.0], [78.0, 49551.0], [78.1, 49551.0], [78.2, 49551.0], [78.3, 49551.0], [78.4, 49551.0], [78.5, 49551.0], [78.6, 49551.0], [78.7, 49551.0], [78.8, 49551.0], [78.9, 49551.0], [79.0, 49848.0], [79.1, 49848.0], [79.2, 49848.0], [79.3, 49848.0], [79.4, 49848.0], [79.5, 49848.0], [79.6, 49848.0], [79.7, 49848.0], [79.8, 49848.0], [79.9, 49848.0], [80.0, 49952.0], [80.1, 49952.0], [80.2, 49952.0], [80.3, 49952.0], [80.4, 49952.0], [80.5, 49952.0], [80.6, 49952.0], [80.7, 49952.0], [80.8, 49952.0], [80.9, 49952.0], [81.0, 50113.0], [81.1, 50113.0], [81.2, 50113.0], [81.3, 50113.0], [81.4, 50113.0], [81.5, 50113.0], [81.6, 50113.0], [81.7, 50113.0], [81.8, 50113.0], [81.9, 50113.0], [82.0, 50902.0], [82.1, 50902.0], [82.2, 50902.0], [82.3, 50902.0], [82.4, 50902.0], [82.5, 50902.0], [82.6, 50902.0], [82.7, 50902.0], [82.8, 50902.0], [82.9, 50902.0], [83.0, 53861.0], [83.1, 53861.0], [83.2, 53861.0], [83.3, 53861.0], [83.4, 53861.0], [83.5, 53861.0], [83.6, 53861.0], [83.7, 53861.0], [83.8, 53861.0], [83.9, 53861.0], [84.0, 54596.0], [84.1, 54596.0], [84.2, 54596.0], [84.3, 54596.0], [84.4, 54596.0], [84.5, 54596.0], [84.6, 54596.0], [84.7, 54596.0], [84.8, 54596.0], [84.9, 54596.0], [85.0, 54913.0], [85.1, 54913.0], [85.2, 54913.0], [85.3, 54913.0], [85.4, 54913.0], [85.5, 54913.0], [85.6, 54913.0], [85.7, 54913.0], [85.8, 54913.0], [85.9, 54913.0], [86.0, 55040.0], [86.1, 55040.0], [86.2, 55040.0], [86.3, 55040.0], [86.4, 55040.0], [86.5, 55040.0], [86.6, 55040.0], [86.7, 55040.0], [86.8, 55040.0], [86.9, 55040.0], [87.0, 55424.0], [87.1, 55424.0], [87.2, 55424.0], [87.3, 55424.0], [87.4, 55424.0], [87.5, 55424.0], [87.6, 55424.0], [87.7, 55424.0], [87.8, 55424.0], [87.9, 55424.0], [88.0, 56004.0], [88.1, 56004.0], [88.2, 56004.0], [88.3, 56004.0], [88.4, 56004.0], [88.5, 56004.0], [88.6, 56004.0], [88.7, 56004.0], [88.8, 56004.0], [88.9, 56004.0], [89.0, 56021.0], [89.1, 56021.0], [89.2, 56021.0], [89.3, 56021.0], [89.4, 56021.0], [89.5, 56021.0], [89.6, 56021.0], [89.7, 56021.0], [89.8, 56021.0], [89.9, 56021.0], [90.0, 56088.0], [90.1, 56088.0], [90.2, 56088.0], [90.3, 56088.0], [90.4, 56088.0], [90.5, 56088.0], [90.6, 56088.0], [90.7, 56088.0], [90.8, 56088.0], [90.9, 56088.0], [91.0, 56416.0], [91.1, 56416.0], [91.2, 56416.0], [91.3, 56416.0], [91.4, 56416.0], [91.5, 56416.0], [91.6, 56416.0], [91.7, 56416.0], [91.8, 56416.0], [91.9, 56416.0], [92.0, 56888.0], [92.1, 56888.0], [92.2, 56888.0], [92.3, 56888.0], [92.4, 56888.0], [92.5, 56888.0], [92.6, 56888.0], [92.7, 56888.0], [92.8, 56888.0], [92.9, 56888.0], [93.0, 57175.0], [93.1, 57175.0], [93.2, 57175.0], [93.3, 57175.0], [93.4, 57175.0], [93.5, 57175.0], [93.6, 57175.0], [93.7, 57175.0], [93.8, 57175.0], [93.9, 57175.0], [94.0, 59195.0], [94.1, 59195.0], [94.2, 59195.0], [94.3, 59195.0], [94.4, 59195.0], [94.5, 59195.0], [94.6, 59195.0], [94.7, 59195.0], [94.8, 59195.0], [94.9, 59195.0], [95.0, 59254.0], [95.1, 59254.0], [95.2, 59254.0], [95.3, 59254.0], [95.4, 59254.0], [95.5, 59254.0], [95.6, 59254.0], [95.7, 59254.0], [95.8, 59254.0], [95.9, 59254.0], [96.0, 59284.0], [96.1, 59284.0], [96.2, 59284.0], [96.3, 59284.0], [96.4, 59284.0], [96.5, 59284.0], [96.6, 59284.0], [96.7, 59284.0], [96.8, 59284.0], [96.9, 59284.0], [97.0, 59483.0], [97.1, 59483.0], [97.2, 59483.0], [97.3, 59483.0], [97.4, 59483.0], [97.5, 59483.0], [97.6, 59483.0], [97.7, 59483.0], [97.8, 59483.0], [97.9, 59483.0], [98.0, 59487.0], [98.1, 59487.0], [98.2, 59487.0], [98.3, 59487.0], [98.4, 59487.0], [98.5, 59487.0], [98.6, 59487.0], [98.7, 59487.0], [98.8, 59487.0], [98.9, 59487.0], [99.0, 59504.0], [99.1, 59504.0], [99.2, 59504.0], [99.3, 59504.0], [99.4, 59504.0], [99.5, 59504.0], [99.6, 59504.0], [99.7, 59504.0], [99.8, 59504.0], [99.9, 59504.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5300.0, "maxY": 3.0, "series": [{"data": [[5300.0, 1.0], [6300.0, 2.0], [6800.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [7800.0, 2.0], [10500.0, 1.0], [11200.0, 1.0], [11600.0, 1.0], [12200.0, 1.0], [12300.0, 1.0], [12600.0, 2.0], [12700.0, 2.0], [13200.0, 1.0], [15500.0, 1.0], [16000.0, 1.0], [16400.0, 1.0], [18600.0, 2.0], [18800.0, 2.0], [19100.0, 3.0], [22800.0, 1.0], [22900.0, 1.0], [23300.0, 1.0], [25300.0, 2.0], [25600.0, 3.0], [25700.0, 1.0], [26000.0, 1.0], [28300.0, 1.0], [28600.0, 1.0], [28700.0, 1.0], [30700.0, 1.0], [30800.0, 1.0], [30900.0, 2.0], [31000.0, 1.0], [31200.0, 1.0], [31400.0, 1.0], [33700.0, 1.0], [34000.0, 1.0], [34100.0, 1.0], [36100.0, 1.0], [36600.0, 2.0], [37100.0, 1.0], [37400.0, 1.0], [37600.0, 1.0], [37800.0, 1.0], [38900.0, 1.0], [39800.0, 1.0], [40400.0, 1.0], [41400.0, 1.0], [43700.0, 1.0], [43900.0, 2.0], [44100.0, 1.0], [44600.0, 1.0], [44900.0, 1.0], [45000.0, 1.0], [45100.0, 1.0], [45900.0, 1.0], [47000.0, 1.0], [48700.0, 1.0], [48900.0, 1.0], [49000.0, 1.0], [49500.0, 2.0], [49800.0, 1.0], [49900.0, 1.0], [50100.0, 1.0], [50900.0, 1.0], [53800.0, 1.0], [54500.0, 1.0], [54900.0, 1.0], [55000.0, 1.0], [55400.0, 1.0], [56000.0, 3.0], [56400.0, 1.0], [56800.0, 1.0], [57100.0, 1.0], [59100.0, 1.0], [59200.0, 2.0], [59400.0, 2.0], [59500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 59500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 39.51282051282051, "minX": 1.6682343E12, "maxY": 89.54545454545455, "series": [{"data": [[1.6682343E12, 89.54545454545455], [1.66823436E12, 39.51282051282051]], "isOverall": false, "label": "client-to-gateway-non-caching", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823436E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5383.0, "minX": 1.0, "maxY": 59504.0, "series": [{"data": [[2.0, 59487.0], [3.0, 59483.0], [4.0, 59284.0], [5.0, 59254.0], [6.0, 59195.0], [7.0, 57175.0], [8.0, 56888.0], [9.0, 56416.0], [10.0, 56088.0], [11.0, 56021.0], [12.0, 56004.0], [13.0, 55424.0], [14.0, 55040.0], [15.0, 54913.0], [16.0, 54596.0], [17.0, 53861.0], [18.0, 50902.0], [19.0, 50113.0], [20.0, 49952.0], [21.0, 49848.0], [22.0, 49551.0], [23.0, 49524.0], [24.0, 49090.0], [25.0, 48931.0], [26.0, 48787.0], [27.0, 47002.0], [28.0, 45902.0], [29.0, 45157.0], [30.0, 45054.0], [31.0, 44911.0], [33.0, 44183.0], [32.0, 44633.0], [35.0, 43912.0], [34.0, 43954.0], [37.0, 41443.0], [36.0, 43790.0], [39.0, 39837.0], [38.0, 40494.0], [41.0, 37834.0], [40.0, 38900.0], [43.0, 37430.0], [42.0, 37624.0], [45.0, 36678.0], [44.0, 37176.0], [47.0, 36160.0], [46.0, 36635.0], [49.0, 34055.0], [48.0, 34112.0], [51.0, 31488.0], [50.0, 33740.0], [53.0, 31006.0], [52.0, 31271.0], [55.0, 30921.0], [54.0, 30924.0], [57.0, 30733.0], [56.0, 30881.0], [59.0, 28640.0], [58.0, 28796.0], [61.0, 26089.0], [60.0, 28365.0], [63.0, 25673.0], [62.0, 25776.0], [67.0, 25374.0], [66.0, 25384.0], [65.0, 25627.0], [64.0, 25643.0], [70.0, 22834.0], [69.0, 22911.0], [68.0, 23399.0], [75.0, 18802.0], [74.0, 18830.0], [73.0, 19150.0], [72.0, 19171.5], [79.0, 16021.0], [78.0, 16491.0], [77.0, 18679.0], [76.0, 18699.0], [83.0, 12748.0], [82.0, 12770.0], [81.0, 13250.0], [80.0, 15565.0], [87.0, 12212.0], [86.0, 12329.0], [85.0, 12685.5], [91.0, 7875.0], [90.0, 10541.0], [89.0, 11200.0], [88.0, 11653.0], [95.0, 7197.0], [94.0, 7304.0], [93.0, 7574.0], [92.0, 7864.0], [99.0, 6380.0], [98.0, 6393.0], [97.0, 6891.0], [96.0, 6918.0], [100.0, 5383.0], [1.0, 59504.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.519999999999996, 33101.15]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 46.93333333333333, "minX": 1.6682343E12, "maxY": 1.4738342866666667E7, "series": [{"data": [[1.6682343E12, 4156660.066666667], [1.66823436E12, 1.4738342866666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6682343E12, 46.93333333333333], [1.66823436E12, 166.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823436E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 10156.318181818184, "minX": 1.6682343E12, "maxY": 39572.76923076924, "series": [{"data": [[1.6682343E12, 10156.318181818184], [1.66823436E12, 39572.76923076924]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823436E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7951.40909090909, "minX": 1.6682343E12, "maxY": 37217.217948717946, "series": [{"data": [[1.6682343E12, 7951.40909090909], [1.66823436E12, 37217.217948717946]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823436E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.227272727272725, "minX": 1.6682343E12, "maxY": 41.012820512820525, "series": [{"data": [[1.6682343E12, 10.227272727272725], [1.66823436E12, 41.012820512820525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823436E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5383.0, "minX": 1.6682343E12, "maxY": 59504.0, "series": [{"data": [[1.6682343E12, 16021.0], [1.66823436E12, 59504.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6682343E12, 14870.499999999998], [1.66823436E12, 56916.700000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6682343E12, 16021.0], [1.66823436E12, 59504.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6682343E12, 15952.599999999999], [1.66823436E12, 59293.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6682343E12, 5383.0], [1.66823436E12, 16491.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6682343E12, 10870.5], [1.66823436E12, 39368.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823436E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 22911.0, "minX": 1.0, "maxY": 44408.0, "series": [{"data": [[1.0, 41443.0], [2.0, 27012.0], [4.0, 44408.0], [5.0, 37806.5], [3.0, 22911.0], [7.0, 24958.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 20005.0, "minX": 1.0, "maxY": 42080.0, "series": [{"data": [[1.0, 39834.0], [2.0, 24683.5], [4.0, 42080.0], [5.0, 35517.5], [3.0, 20005.0], [7.0, 22395.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6682343E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6682343E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6682343E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6682343E12, "maxY": 1.3, "series": [{"data": [[1.6682343E12, 0.36666666666666664], [1.66823436E12, 1.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823436E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6682343E12, "maxY": 1.3, "series": [{"data": [[1.6682343E12, 0.36666666666666664], [1.66823436E12, 1.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823436E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6682343E12, "maxY": 1.3, "series": [{"data": [[1.6682343E12, 0.36666666666666664], [1.66823436E12, 1.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823436E12, "title": "Total Transactions Per Second"}},
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

