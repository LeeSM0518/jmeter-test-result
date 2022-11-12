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
        data: {"result": {"minY": 6377.0, "minX": 0.0, "maxY": 65442.0, "series": [{"data": [[0.0, 6377.0], [0.1, 6377.0], [0.2, 6377.0], [0.3, 6377.0], [0.4, 6377.0], [0.5, 6377.0], [0.6, 6377.0], [0.7, 6377.0], [0.8, 6377.0], [0.9, 6377.0], [1.0, 7062.0], [1.1, 7062.0], [1.2, 7062.0], [1.3, 7062.0], [1.4, 7062.0], [1.5, 7062.0], [1.6, 7062.0], [1.7, 7062.0], [1.8, 7062.0], [1.9, 7062.0], [2.0, 7468.0], [2.1, 7468.0], [2.2, 7468.0], [2.3, 7468.0], [2.4, 7468.0], [2.5, 7468.0], [2.6, 7468.0], [2.7, 7468.0], [2.8, 7468.0], [2.9, 7468.0], [3.0, 7698.0], [3.1, 7698.0], [3.2, 7698.0], [3.3, 7698.0], [3.4, 7698.0], [3.5, 7698.0], [3.6, 7698.0], [3.7, 7698.0], [3.8, 7698.0], [3.9, 7698.0], [4.0, 8304.0], [4.1, 8304.0], [4.2, 8304.0], [4.3, 8304.0], [4.4, 8304.0], [4.5, 8304.0], [4.6, 8304.0], [4.7, 8304.0], [4.8, 8304.0], [4.9, 8304.0], [5.0, 8317.0], [5.1, 8317.0], [5.2, 8317.0], [5.3, 8317.0], [5.4, 8317.0], [5.5, 8317.0], [5.6, 8317.0], [5.7, 8317.0], [5.8, 8317.0], [5.9, 8317.0], [6.0, 8440.0], [6.1, 8440.0], [6.2, 8440.0], [6.3, 8440.0], [6.4, 8440.0], [6.5, 8440.0], [6.6, 8440.0], [6.7, 8440.0], [6.8, 8440.0], [6.9, 8440.0], [7.0, 8456.0], [7.1, 8456.0], [7.2, 8456.0], [7.3, 8456.0], [7.4, 8456.0], [7.5, 8456.0], [7.6, 8456.0], [7.7, 8456.0], [7.8, 8456.0], [7.9, 8456.0], [8.0, 8459.0], [8.1, 8459.0], [8.2, 8459.0], [8.3, 8459.0], [8.4, 8459.0], [8.5, 8459.0], [8.6, 8459.0], [8.7, 8459.0], [8.8, 8459.0], [8.9, 8459.0], [9.0, 8464.0], [9.1, 8464.0], [9.2, 8464.0], [9.3, 8464.0], [9.4, 8464.0], [9.5, 8464.0], [9.6, 8464.0], [9.7, 8464.0], [9.8, 8464.0], [9.9, 8464.0], [10.0, 12725.0], [10.1, 12725.0], [10.2, 12725.0], [10.3, 12725.0], [10.4, 12725.0], [10.5, 12725.0], [10.6, 12725.0], [10.7, 12725.0], [10.8, 12725.0], [10.9, 12725.0], [11.0, 14047.0], [11.1, 14047.0], [11.2, 14047.0], [11.3, 14047.0], [11.4, 14047.0], [11.5, 14047.0], [11.6, 14047.0], [11.7, 14047.0], [11.8, 14047.0], [11.9, 14047.0], [12.0, 14204.0], [12.1, 14204.0], [12.2, 14204.0], [12.3, 14204.0], [12.4, 14204.0], [12.5, 14204.0], [12.6, 14204.0], [12.7, 14204.0], [12.8, 14204.0], [12.9, 14204.0], [13.0, 14963.0], [13.1, 14963.0], [13.2, 14963.0], [13.3, 14963.0], [13.4, 14963.0], [13.5, 14963.0], [13.6, 14963.0], [13.7, 14963.0], [13.8, 14963.0], [13.9, 14963.0], [14.0, 15352.0], [14.1, 15352.0], [14.2, 15352.0], [14.3, 15352.0], [14.4, 15352.0], [14.5, 15352.0], [14.6, 15352.0], [14.7, 15352.0], [14.8, 15352.0], [14.9, 15352.0], [15.0, 15362.0], [15.1, 15362.0], [15.2, 15362.0], [15.3, 15362.0], [15.4, 15362.0], [15.5, 15362.0], [15.6, 15362.0], [15.7, 15362.0], [15.8, 15362.0], [15.9, 15362.0], [16.0, 15372.0], [16.1, 15372.0], [16.2, 15372.0], [16.3, 15372.0], [16.4, 15372.0], [16.5, 15372.0], [16.6, 15372.0], [16.7, 15372.0], [16.8, 15372.0], [16.9, 15372.0], [17.0, 15667.0], [17.1, 15667.0], [17.2, 15667.0], [17.3, 15667.0], [17.4, 15667.0], [17.5, 15667.0], [17.6, 15667.0], [17.7, 15667.0], [17.8, 15667.0], [17.9, 15667.0], [18.0, 15684.0], [18.1, 15684.0], [18.2, 15684.0], [18.3, 15684.0], [18.4, 15684.0], [18.5, 15684.0], [18.6, 15684.0], [18.7, 15684.0], [18.8, 15684.0], [18.9, 15684.0], [19.0, 16100.0], [19.1, 16100.0], [19.2, 16100.0], [19.3, 16100.0], [19.4, 16100.0], [19.5, 16100.0], [19.6, 16100.0], [19.7, 16100.0], [19.8, 16100.0], [19.9, 16100.0], [20.0, 18790.0], [20.1, 18790.0], [20.2, 18790.0], [20.3, 18790.0], [20.4, 18790.0], [20.5, 18790.0], [20.6, 18790.0], [20.7, 18790.0], [20.8, 18790.0], [20.9, 18790.0], [21.0, 20682.0], [21.1, 20682.0], [21.2, 20682.0], [21.3, 20682.0], [21.4, 20682.0], [21.5, 20682.0], [21.6, 20682.0], [21.7, 20682.0], [21.8, 20682.0], [21.9, 20682.0], [22.0, 21064.0], [22.1, 21064.0], [22.2, 21064.0], [22.3, 21064.0], [22.4, 21064.0], [22.5, 21064.0], [22.6, 21064.0], [22.7, 21064.0], [22.8, 21064.0], [22.9, 21064.0], [23.0, 21268.0], [23.1, 21268.0], [23.2, 21268.0], [23.3, 21268.0], [23.4, 21268.0], [23.5, 21268.0], [23.6, 21268.0], [23.7, 21268.0], [23.8, 21268.0], [23.9, 21268.0], [24.0, 22671.0], [24.1, 22671.0], [24.2, 22671.0], [24.3, 22671.0], [24.4, 22671.0], [24.5, 22671.0], [24.6, 22671.0], [24.7, 22671.0], [24.8, 22671.0], [24.9, 22671.0], [25.0, 23207.0], [25.1, 23207.0], [25.2, 23207.0], [25.3, 23207.0], [25.4, 23207.0], [25.5, 23207.0], [25.6, 23207.0], [25.7, 23207.0], [25.8, 23207.0], [25.9, 23207.0], [26.0, 23312.0], [26.1, 23312.0], [26.2, 23312.0], [26.3, 23312.0], [26.4, 23312.0], [26.5, 23312.0], [26.6, 23312.0], [26.7, 23312.0], [26.8, 23312.0], [26.9, 23312.0], [27.0, 23336.0], [27.1, 23336.0], [27.2, 23336.0], [27.3, 23336.0], [27.4, 23336.0], [27.5, 23336.0], [27.6, 23336.0], [27.7, 23336.0], [27.8, 23336.0], [27.9, 23336.0], [28.0, 23560.0], [28.1, 23560.0], [28.2, 23560.0], [28.3, 23560.0], [28.4, 23560.0], [28.5, 23560.0], [28.6, 23560.0], [28.7, 23560.0], [28.8, 23560.0], [28.9, 23560.0], [29.0, 23781.0], [29.1, 23781.0], [29.2, 23781.0], [29.3, 23781.0], [29.4, 23781.0], [29.5, 23781.0], [29.6, 23781.0], [29.7, 23781.0], [29.8, 23781.0], [29.9, 23781.0], [30.0, 25877.0], [30.1, 25877.0], [30.2, 25877.0], [30.3, 25877.0], [30.4, 25877.0], [30.5, 25877.0], [30.6, 25877.0], [30.7, 25877.0], [30.8, 25877.0], [30.9, 25877.0], [31.0, 28863.0], [31.1, 28863.0], [31.2, 28863.0], [31.3, 28863.0], [31.4, 28863.0], [31.5, 28863.0], [31.6, 28863.0], [31.7, 28863.0], [31.8, 28863.0], [31.9, 28863.0], [32.0, 29139.0], [32.1, 29139.0], [32.2, 29139.0], [32.3, 29139.0], [32.4, 29139.0], [32.5, 29139.0], [32.6, 29139.0], [32.7, 29139.0], [32.8, 29139.0], [32.9, 29139.0], [33.0, 29372.0], [33.1, 29372.0], [33.2, 29372.0], [33.3, 29372.0], [33.4, 29372.0], [33.5, 29372.0], [33.6, 29372.0], [33.7, 29372.0], [33.8, 29372.0], [33.9, 29372.0], [34.0, 29560.0], [34.1, 29560.0], [34.2, 29560.0], [34.3, 29560.0], [34.4, 29560.0], [34.5, 29560.0], [34.6, 29560.0], [34.7, 29560.0], [34.8, 29560.0], [34.9, 29560.0], [35.0, 30537.0], [35.1, 30537.0], [35.2, 30537.0], [35.3, 30537.0], [35.4, 30537.0], [35.5, 30537.0], [35.6, 30537.0], [35.7, 30537.0], [35.8, 30537.0], [35.9, 30537.0], [36.0, 30741.0], [36.1, 30741.0], [36.2, 30741.0], [36.3, 30741.0], [36.4, 30741.0], [36.5, 30741.0], [36.6, 30741.0], [36.7, 30741.0], [36.8, 30741.0], [36.9, 30741.0], [37.0, 30824.0], [37.1, 30824.0], [37.2, 30824.0], [37.3, 30824.0], [37.4, 30824.0], [37.5, 30824.0], [37.6, 30824.0], [37.7, 30824.0], [37.8, 30824.0], [37.9, 30824.0], [38.0, 30895.0], [38.1, 30895.0], [38.2, 30895.0], [38.3, 30895.0], [38.4, 30895.0], [38.5, 30895.0], [38.6, 30895.0], [38.7, 30895.0], [38.8, 30895.0], [38.9, 30895.0], [39.0, 30901.0], [39.1, 30901.0], [39.2, 30901.0], [39.3, 30901.0], [39.4, 30901.0], [39.5, 30901.0], [39.6, 30901.0], [39.7, 30901.0], [39.8, 30901.0], [39.9, 30901.0], [40.0, 33504.0], [40.1, 33504.0], [40.2, 33504.0], [40.3, 33504.0], [40.4, 33504.0], [40.5, 33504.0], [40.6, 33504.0], [40.7, 33504.0], [40.8, 33504.0], [40.9, 33504.0], [41.0, 35505.0], [41.1, 35505.0], [41.2, 35505.0], [41.3, 35505.0], [41.4, 35505.0], [41.5, 35505.0], [41.6, 35505.0], [41.7, 35505.0], [41.8, 35505.0], [41.9, 35505.0], [42.0, 35577.0], [42.1, 35577.0], [42.2, 35577.0], [42.3, 35577.0], [42.4, 35577.0], [42.5, 35577.0], [42.6, 35577.0], [42.7, 35577.0], [42.8, 35577.0], [42.9, 35577.0], [43.0, 35703.0], [43.1, 35703.0], [43.2, 35703.0], [43.3, 35703.0], [43.4, 35703.0], [43.5, 35703.0], [43.6, 35703.0], [43.7, 35703.0], [43.8, 35703.0], [43.9, 35703.0], [44.0, 35709.0], [44.1, 35709.0], [44.2, 35709.0], [44.3, 35709.0], [44.4, 35709.0], [44.5, 35709.0], [44.6, 35709.0], [44.7, 35709.0], [44.8, 35709.0], [44.9, 35709.0], [45.0, 36525.0], [45.1, 36525.0], [45.2, 36525.0], [45.3, 36525.0], [45.4, 36525.0], [45.5, 36525.0], [45.6, 36525.0], [45.7, 36525.0], [45.8, 36525.0], [45.9, 36525.0], [46.0, 37071.0], [46.1, 37071.0], [46.2, 37071.0], [46.3, 37071.0], [46.4, 37071.0], [46.5, 37071.0], [46.6, 37071.0], [46.7, 37071.0], [46.8, 37071.0], [46.9, 37071.0], [47.0, 37204.0], [47.1, 37204.0], [47.2, 37204.0], [47.3, 37204.0], [47.4, 37204.0], [47.5, 37204.0], [47.6, 37204.0], [47.7, 37204.0], [47.8, 37204.0], [47.9, 37204.0], [48.0, 37522.0], [48.1, 37522.0], [48.2, 37522.0], [48.3, 37522.0], [48.4, 37522.0], [48.5, 37522.0], [48.6, 37522.0], [48.7, 37522.0], [48.8, 37522.0], [48.9, 37522.0], [49.0, 37596.0], [49.1, 37596.0], [49.2, 37596.0], [49.3, 37596.0], [49.4, 37596.0], [49.5, 37596.0], [49.6, 37596.0], [49.7, 37596.0], [49.8, 37596.0], [49.9, 37596.0], [50.0, 37816.0], [50.1, 37816.0], [50.2, 37816.0], [50.3, 37816.0], [50.4, 37816.0], [50.5, 37816.0], [50.6, 37816.0], [50.7, 37816.0], [50.8, 37816.0], [50.9, 37816.0], [51.0, 41700.0], [51.1, 41700.0], [51.2, 41700.0], [51.3, 41700.0], [51.4, 41700.0], [51.5, 41700.0], [51.6, 41700.0], [51.7, 41700.0], [51.8, 41700.0], [51.9, 41700.0], [52.0, 42128.0], [52.1, 42128.0], [52.2, 42128.0], [52.3, 42128.0], [52.4, 42128.0], [52.5, 42128.0], [52.6, 42128.0], [52.7, 42128.0], [52.8, 42128.0], [52.9, 42128.0], [53.0, 42232.0], [53.1, 42232.0], [53.2, 42232.0], [53.3, 42232.0], [53.4, 42232.0], [53.5, 42232.0], [53.6, 42232.0], [53.7, 42232.0], [53.8, 42232.0], [53.9, 42232.0], [54.0, 42431.0], [54.1, 42431.0], [54.2, 42431.0], [54.3, 42431.0], [54.4, 42431.0], [54.5, 42431.0], [54.6, 42431.0], [54.7, 42431.0], [54.8, 42431.0], [54.9, 42431.0], [55.0, 43218.0], [55.1, 43218.0], [55.2, 43218.0], [55.3, 43218.0], [55.4, 43218.0], [55.5, 43218.0], [55.6, 43218.0], [55.7, 43218.0], [55.8, 43218.0], [55.9, 43218.0], [56.0, 43670.0], [56.1, 43670.0], [56.2, 43670.0], [56.3, 43670.0], [56.4, 43670.0], [56.5, 43670.0], [56.6, 43670.0], [56.7, 43670.0], [56.8, 43670.0], [56.9, 43670.0], [57.0, 43802.0], [57.1, 43802.0], [57.2, 43802.0], [57.3, 43802.0], [57.4, 43802.0], [57.5, 43802.0], [57.6, 43802.0], [57.7, 43802.0], [57.8, 43802.0], [57.9, 43802.0], [58.0, 44011.0], [58.1, 44011.0], [58.2, 44011.0], [58.3, 44011.0], [58.4, 44011.0], [58.5, 44011.0], [58.6, 44011.0], [58.7, 44011.0], [58.8, 44011.0], [58.9, 44011.0], [59.0, 44176.0], [59.1, 44176.0], [59.2, 44176.0], [59.3, 44176.0], [59.4, 44176.0], [59.5, 44176.0], [59.6, 44176.0], [59.7, 44176.0], [59.8, 44176.0], [59.9, 44176.0], [60.0, 44176.0], [60.1, 44176.0], [60.2, 44176.0], [60.3, 44176.0], [60.4, 44176.0], [60.5, 44176.0], [60.6, 44176.0], [60.7, 44176.0], [60.8, 44176.0], [60.9, 44176.0], [61.0, 48209.0], [61.1, 48209.0], [61.2, 48209.0], [61.3, 48209.0], [61.4, 48209.0], [61.5, 48209.0], [61.6, 48209.0], [61.7, 48209.0], [61.8, 48209.0], [61.9, 48209.0], [62.0, 48344.0], [62.1, 48344.0], [62.2, 48344.0], [62.3, 48344.0], [62.4, 48344.0], [62.5, 48344.0], [62.6, 48344.0], [62.7, 48344.0], [62.8, 48344.0], [62.9, 48344.0], [63.0, 48621.0], [63.1, 48621.0], [63.2, 48621.0], [63.3, 48621.0], [63.4, 48621.0], [63.5, 48621.0], [63.6, 48621.0], [63.7, 48621.0], [63.8, 48621.0], [63.9, 48621.0], [64.0, 48910.0], [64.1, 48910.0], [64.2, 48910.0], [64.3, 48910.0], [64.4, 48910.0], [64.5, 48910.0], [64.6, 48910.0], [64.7, 48910.0], [64.8, 48910.0], [64.9, 48910.0], [65.0, 49062.0], [65.1, 49062.0], [65.2, 49062.0], [65.3, 49062.0], [65.4, 49062.0], [65.5, 49062.0], [65.6, 49062.0], [65.7, 49062.0], [65.8, 49062.0], [65.9, 49062.0], [66.0, 49081.0], [66.1, 49081.0], [66.2, 49081.0], [66.3, 49081.0], [66.4, 49081.0], [66.5, 49081.0], [66.6, 49081.0], [66.7, 49081.0], [66.8, 49081.0], [66.9, 49081.0], [67.0, 49382.0], [67.1, 49382.0], [67.2, 49382.0], [67.3, 49382.0], [67.4, 49382.0], [67.5, 49382.0], [67.6, 49382.0], [67.7, 49382.0], [67.8, 49382.0], [67.9, 49382.0], [68.0, 49491.0], [68.1, 49491.0], [68.2, 49491.0], [68.3, 49491.0], [68.4, 49491.0], [68.5, 49491.0], [68.6, 49491.0], [68.7, 49491.0], [68.8, 49491.0], [68.9, 49491.0], [69.0, 49567.0], [69.1, 49567.0], [69.2, 49567.0], [69.3, 49567.0], [69.4, 49567.0], [69.5, 49567.0], [69.6, 49567.0], [69.7, 49567.0], [69.8, 49567.0], [69.9, 49567.0], [70.0, 49891.0], [70.1, 49891.0], [70.2, 49891.0], [70.3, 49891.0], [70.4, 49891.0], [70.5, 49891.0], [70.6, 49891.0], [70.7, 49891.0], [70.8, 49891.0], [70.9, 49891.0], [71.0, 53140.0], [71.1, 53140.0], [71.2, 53140.0], [71.3, 53140.0], [71.4, 53140.0], [71.5, 53140.0], [71.6, 53140.0], [71.7, 53140.0], [71.8, 53140.0], [71.9, 53140.0], [72.0, 53419.0], [72.1, 53419.0], [72.2, 53419.0], [72.3, 53419.0], [72.4, 53419.0], [72.5, 53419.0], [72.6, 53419.0], [72.7, 53419.0], [72.8, 53419.0], [72.9, 53419.0], [73.0, 53575.0], [73.1, 53575.0], [73.2, 53575.0], [73.3, 53575.0], [73.4, 53575.0], [73.5, 53575.0], [73.6, 53575.0], [73.7, 53575.0], [73.8, 53575.0], [73.9, 53575.0], [74.0, 54194.0], [74.1, 54194.0], [74.2, 54194.0], [74.3, 54194.0], [74.4, 54194.0], [74.5, 54194.0], [74.6, 54194.0], [74.7, 54194.0], [74.8, 54194.0], [74.9, 54194.0], [75.0, 54248.0], [75.1, 54248.0], [75.2, 54248.0], [75.3, 54248.0], [75.4, 54248.0], [75.5, 54248.0], [75.6, 54248.0], [75.7, 54248.0], [75.8, 54248.0], [75.9, 54248.0], [76.0, 55261.0], [76.1, 55261.0], [76.2, 55261.0], [76.3, 55261.0], [76.4, 55261.0], [76.5, 55261.0], [76.6, 55261.0], [76.7, 55261.0], [76.8, 55261.0], [76.9, 55261.0], [77.0, 55265.0], [77.1, 55265.0], [77.2, 55265.0], [77.3, 55265.0], [77.4, 55265.0], [77.5, 55265.0], [77.6, 55265.0], [77.7, 55265.0], [77.8, 55265.0], [77.9, 55265.0], [78.0, 55554.0], [78.1, 55554.0], [78.2, 55554.0], [78.3, 55554.0], [78.4, 55554.0], [78.5, 55554.0], [78.6, 55554.0], [78.7, 55554.0], [78.8, 55554.0], [78.9, 55554.0], [79.0, 55645.0], [79.1, 55645.0], [79.2, 55645.0], [79.3, 55645.0], [79.4, 55645.0], [79.5, 55645.0], [79.6, 55645.0], [79.7, 55645.0], [79.8, 55645.0], [79.9, 55645.0], [80.0, 55658.0], [80.1, 55658.0], [80.2, 55658.0], [80.3, 55658.0], [80.4, 55658.0], [80.5, 55658.0], [80.6, 55658.0], [80.7, 55658.0], [80.8, 55658.0], [80.9, 55658.0], [81.0, 59370.0], [81.1, 59370.0], [81.2, 59370.0], [81.3, 59370.0], [81.4, 59370.0], [81.5, 59370.0], [81.6, 59370.0], [81.7, 59370.0], [81.8, 59370.0], [81.9, 59370.0], [82.0, 59788.0], [82.1, 59788.0], [82.2, 59788.0], [82.3, 59788.0], [82.4, 59788.0], [82.5, 59788.0], [82.6, 59788.0], [82.7, 59788.0], [82.8, 59788.0], [82.9, 59788.0], [83.0, 60811.0], [83.1, 60811.0], [83.2, 60811.0], [83.3, 60811.0], [83.4, 60811.0], [83.5, 60811.0], [83.6, 60811.0], [83.7, 60811.0], [83.8, 60811.0], [83.9, 60811.0], [84.0, 60970.0], [84.1, 60970.0], [84.2, 60970.0], [84.3, 60970.0], [84.4, 60970.0], [84.5, 60970.0], [84.6, 60970.0], [84.7, 60970.0], [84.8, 60970.0], [84.9, 60970.0], [85.0, 61138.0], [85.1, 61138.0], [85.2, 61138.0], [85.3, 61138.0], [85.4, 61138.0], [85.5, 61138.0], [85.6, 61138.0], [85.7, 61138.0], [85.8, 61138.0], [85.9, 61138.0], [86.0, 61181.0], [86.1, 61181.0], [86.2, 61181.0], [86.3, 61181.0], [86.4, 61181.0], [86.5, 61181.0], [86.6, 61181.0], [86.7, 61181.0], [86.8, 61181.0], [86.9, 61181.0], [87.0, 61433.0], [87.1, 61433.0], [87.2, 61433.0], [87.3, 61433.0], [87.4, 61433.0], [87.5, 61433.0], [87.6, 61433.0], [87.7, 61433.0], [87.8, 61433.0], [87.9, 61433.0], [88.0, 61834.0], [88.1, 61834.0], [88.2, 61834.0], [88.3, 61834.0], [88.4, 61834.0], [88.5, 61834.0], [88.6, 61834.0], [88.7, 61834.0], [88.8, 61834.0], [88.9, 61834.0], [89.0, 61852.0], [89.1, 61852.0], [89.2, 61852.0], [89.3, 61852.0], [89.4, 61852.0], [89.5, 61852.0], [89.6, 61852.0], [89.7, 61852.0], [89.8, 61852.0], [89.9, 61852.0], [90.0, 62023.0], [90.1, 62023.0], [90.2, 62023.0], [90.3, 62023.0], [90.4, 62023.0], [90.5, 62023.0], [90.6, 62023.0], [90.7, 62023.0], [90.8, 62023.0], [90.9, 62023.0], [91.0, 64664.0], [91.1, 64664.0], [91.2, 64664.0], [91.3, 64664.0], [91.4, 64664.0], [91.5, 64664.0], [91.6, 64664.0], [91.7, 64664.0], [91.8, 64664.0], [91.9, 64664.0], [92.0, 64687.0], [92.1, 64687.0], [92.2, 64687.0], [92.3, 64687.0], [92.4, 64687.0], [92.5, 64687.0], [92.6, 64687.0], [92.7, 64687.0], [92.8, 64687.0], [92.9, 64687.0], [93.0, 65177.0], [93.1, 65177.0], [93.2, 65177.0], [93.3, 65177.0], [93.4, 65177.0], [93.5, 65177.0], [93.6, 65177.0], [93.7, 65177.0], [93.8, 65177.0], [93.9, 65177.0], [94.0, 65296.0], [94.1, 65296.0], [94.2, 65296.0], [94.3, 65296.0], [94.4, 65296.0], [94.5, 65296.0], [94.6, 65296.0], [94.7, 65296.0], [94.8, 65296.0], [94.9, 65296.0], [95.0, 65298.0], [95.1, 65298.0], [95.2, 65298.0], [95.3, 65298.0], [95.4, 65298.0], [95.5, 65298.0], [95.6, 65298.0], [95.7, 65298.0], [95.8, 65298.0], [95.9, 65298.0], [96.0, 65334.0], [96.1, 65334.0], [96.2, 65334.0], [96.3, 65334.0], [96.4, 65334.0], [96.5, 65334.0], [96.6, 65334.0], [96.7, 65334.0], [96.8, 65334.0], [96.9, 65334.0], [97.0, 65346.0], [97.1, 65346.0], [97.2, 65346.0], [97.3, 65346.0], [97.4, 65346.0], [97.5, 65346.0], [97.6, 65346.0], [97.7, 65346.0], [97.8, 65346.0], [97.9, 65346.0], [98.0, 65373.0], [98.1, 65373.0], [98.2, 65373.0], [98.3, 65373.0], [98.4, 65373.0], [98.5, 65373.0], [98.6, 65373.0], [98.7, 65373.0], [98.8, 65373.0], [98.9, 65373.0], [99.0, 65442.0], [99.1, 65442.0], [99.2, 65442.0], [99.3, 65442.0], [99.4, 65442.0], [99.5, 65442.0], [99.6, 65442.0], [99.7, 65442.0], [99.8, 65442.0], [99.9, 65442.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 6300.0, "maxY": 4.0, "series": [{"data": [[6300.0, 1.0], [7000.0, 1.0], [7400.0, 1.0], [7600.0, 1.0], [8300.0, 2.0], [8400.0, 4.0], [12700.0, 1.0], [14000.0, 1.0], [14200.0, 1.0], [14900.0, 1.0], [15300.0, 3.0], [15600.0, 2.0], [16100.0, 1.0], [18700.0, 1.0], [20600.0, 1.0], [21000.0, 1.0], [21200.0, 1.0], [22600.0, 1.0], [23200.0, 1.0], [23300.0, 2.0], [23500.0, 1.0], [23700.0, 1.0], [25800.0, 1.0], [28800.0, 1.0], [29100.0, 1.0], [29300.0, 1.0], [29500.0, 1.0], [30500.0, 1.0], [30700.0, 1.0], [30800.0, 2.0], [30900.0, 1.0], [33500.0, 1.0], [35500.0, 2.0], [35700.0, 2.0], [36500.0, 1.0], [37000.0, 1.0], [37200.0, 1.0], [37500.0, 2.0], [37800.0, 1.0], [41700.0, 1.0], [42100.0, 1.0], [42200.0, 1.0], [42400.0, 1.0], [43200.0, 1.0], [43600.0, 1.0], [43800.0, 1.0], [44000.0, 1.0], [44100.0, 2.0], [48200.0, 1.0], [48300.0, 1.0], [48600.0, 1.0], [48900.0, 1.0], [49000.0, 2.0], [49300.0, 1.0], [49400.0, 1.0], [49500.0, 1.0], [49800.0, 1.0], [53100.0, 1.0], [53400.0, 1.0], [53500.0, 1.0], [54100.0, 1.0], [54200.0, 1.0], [55200.0, 2.0], [55500.0, 1.0], [55600.0, 2.0], [59300.0, 1.0], [59700.0, 1.0], [60800.0, 1.0], [60900.0, 1.0], [61100.0, 2.0], [61400.0, 1.0], [61800.0, 2.0], [62000.0, 1.0], [64600.0, 2.0], [65100.0, 1.0], [65200.0, 2.0], [65300.0, 3.0], [65400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 65400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.66823706E12, "maxY": 55.010989010989015, "series": [{"data": [[1.66823712E12, 5.0], [1.66823706E12, 55.010989010989015]], "isOverall": false, "label": "client-to-gateway-caching", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823712E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6377.0, "minX": 1.0, "maxY": 65442.0, "series": [{"data": [[2.0, 65373.0], [3.0, 65346.0], [4.0, 65334.0], [5.0, 65296.0], [6.0, 65298.0], [7.0, 65177.0], [8.0, 64687.0], [9.0, 64664.0], [10.0, 62023.0], [11.0, 61852.0], [12.0, 61834.0], [13.0, 61433.0], [14.0, 61181.0], [15.0, 61138.0], [16.0, 60970.0], [17.0, 60811.0], [18.0, 59788.0], [19.0, 59370.0], [20.0, 55658.0], [21.0, 55645.0], [22.0, 55554.0], [23.0, 55265.0], [24.0, 55261.0], [25.0, 54248.0], [26.0, 54194.0], [27.0, 53575.0], [28.0, 53419.0], [29.0, 53140.0], [30.0, 49891.0], [31.0, 49567.0], [33.0, 49382.0], [32.0, 49491.0], [35.0, 49062.0], [34.0, 49081.0], [37.0, 48621.0], [36.0, 48910.0], [39.0, 48209.0], [38.0, 48344.0], [41.0, 44176.0], [43.0, 43802.0], [42.0, 44011.0], [45.0, 43218.0], [44.0, 43670.0], [47.0, 42232.0], [46.0, 42431.0], [49.0, 41700.0], [48.0, 42128.0], [51.0, 37596.0], [50.0, 37816.0], [53.0, 37204.0], [52.0, 37522.0], [55.0, 36525.0], [54.0, 37071.0], [57.0, 35709.0], [56.0, 35703.0], [59.0, 35505.0], [58.0, 35577.0], [61.0, 30901.0], [60.0, 33504.0], [63.0, 30824.0], [62.0, 30895.0], [67.0, 29372.0], [66.0, 29560.0], [65.0, 30537.0], [64.0, 30741.0], [71.0, 23781.0], [70.0, 25877.0], [69.0, 28863.0], [68.0, 29139.0], [75.0, 23207.0], [74.0, 23312.0], [73.0, 23336.0], [72.0, 23560.0], [79.0, 20682.0], [78.0, 21064.0], [77.0, 21268.0], [76.0, 22671.0], [83.0, 15667.0], [82.0, 15684.0], [81.0, 16100.0], [80.0, 18790.0], [87.0, 14963.0], [86.0, 15352.0], [85.0, 15362.0], [84.0, 15372.0], [91.0, 8464.0], [90.0, 12725.0], [89.0, 14047.0], [88.0, 14204.0], [95.0, 8317.0], [94.0, 8440.0], [93.0, 8456.0], [92.0, 8459.0], [99.0, 7062.0], [98.0, 7468.0], [97.0, 7698.0], [96.0, 8304.0], [100.0, 6377.0], [1.0, 65442.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.51000000000001, 38117.11]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 28.8, "minX": 1.66823706E12, "maxY": 1.7194024883333333E7, "series": [{"data": [[1.66823712E12, 1700400.5], [1.66823706E12, 1.7194024883333333E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66823712E12, 28.8], [1.66823706E12, 291.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823712E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 35440.593406593405, "minX": 1.66823706E12, "maxY": 65179.666666666664, "series": [{"data": [[1.66823712E12, 65179.666666666664], [1.66823706E12, 35440.593406593405]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823712E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 33144.37362637363, "minX": 1.66823706E12, "maxY": 63852.77777777778, "series": [{"data": [[1.66823712E12, 63852.77777777778], [1.66823706E12, 33144.37362637363]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823712E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 45.648351648351635, "minX": 1.66823706E12, "maxY": 50.99999999999999, "series": [{"data": [[1.66823712E12, 50.99999999999999], [1.66823706E12, 45.648351648351635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823712E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6377.0, "minX": 1.66823706E12, "maxY": 65442.0, "series": [{"data": [[1.66823712E12, 65442.0], [1.66823706E12, 62023.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66823712E12, 65442.0], [1.66823706E12, 59704.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66823712E12, 65442.0], [1.66823706E12, 62023.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66823712E12, 65442.0], [1.66823706E12, 61281.799999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66823712E12, 64664.0], [1.66823706E12, 6377.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66823712E12, 65298.0], [1.66823706E12, 36525.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 24274.0, "minX": 1.0, "maxY": 65334.0, "series": [{"data": [[1.0, 24274.0], [2.0, 59579.0], [4.0, 41959.0], [5.0, 33986.0], [3.0, 42232.0], [6.0, 28763.0], [7.0, 65334.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 21593.0, "minX": 1.0, "maxY": 64109.0, "series": [{"data": [[1.0, 21593.0], [2.0, 57362.0], [4.0, 39847.0], [5.0, 31666.5], [3.0, 39710.0], [6.0, 26660.5], [7.0, 64109.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.668237E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.668237E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.668237E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.66823706E12, "maxY": 1.5166666666666666, "series": [{"data": [[1.66823712E12, 0.15], [1.66823706E12, 1.5166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823712E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.66823706E12, "maxY": 1.5166666666666666, "series": [{"data": [[1.66823712E12, 0.15], [1.66823706E12, 1.5166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823712E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.66823706E12, "maxY": 1.5166666666666666, "series": [{"data": [[1.66823712E12, 0.15], [1.66823706E12, 1.5166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823712E12, "title": "Total Transactions Per Second"}},
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

