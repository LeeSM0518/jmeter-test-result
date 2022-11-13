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
        data: {"result": {"minY": 13922.0, "minX": 0.0, "maxY": 19606.0, "series": [{"data": [[0.0, 13922.0], [0.1, 13922.0], [0.2, 13922.0], [0.3, 13922.0], [0.4, 13922.0], [0.5, 13922.0], [0.6, 13922.0], [0.7, 13922.0], [0.8, 13922.0], [0.9, 13922.0], [1.0, 14388.0], [1.1, 14388.0], [1.2, 14388.0], [1.3, 14388.0], [1.4, 14388.0], [1.5, 14388.0], [1.6, 14388.0], [1.7, 14388.0], [1.8, 14388.0], [1.9, 14388.0], [2.0, 14790.0], [2.1, 14790.0], [2.2, 14790.0], [2.3, 14790.0], [2.4, 14790.0], [2.5, 14790.0], [2.6, 14790.0], [2.7, 14790.0], [2.8, 14790.0], [2.9, 14790.0], [3.0, 15946.0], [3.1, 15946.0], [3.2, 15946.0], [3.3, 15946.0], [3.4, 15946.0], [3.5, 15946.0], [3.6, 15946.0], [3.7, 15946.0], [3.8, 15946.0], [3.9, 15946.0], [4.0, 16293.0], [4.1, 16293.0], [4.2, 16293.0], [4.3, 16293.0], [4.4, 16293.0], [4.5, 16293.0], [4.6, 16293.0], [4.7, 16293.0], [4.8, 16293.0], [4.9, 16293.0], [5.0, 17664.0], [5.1, 17664.0], [5.2, 17664.0], [5.3, 17664.0], [5.4, 17664.0], [5.5, 17664.0], [5.6, 17664.0], [5.7, 17664.0], [5.8, 17664.0], [5.9, 17664.0], [6.0, 17882.0], [6.1, 17882.0], [6.2, 17882.0], [6.3, 17882.0], [6.4, 17882.0], [6.5, 17882.0], [6.6, 17882.0], [6.7, 17882.0], [6.8, 17882.0], [6.9, 17882.0], [7.0, 17930.0], [7.1, 17930.0], [7.2, 17930.0], [7.3, 17930.0], [7.4, 17930.0], [7.5, 17930.0], [7.6, 17930.0], [7.7, 17930.0], [7.8, 17930.0], [7.9, 17930.0], [8.0, 17943.0], [8.1, 17943.0], [8.2, 17943.0], [8.3, 17943.0], [8.4, 17943.0], [8.5, 17943.0], [8.6, 17943.0], [8.7, 17943.0], [8.8, 17943.0], [8.9, 17943.0], [9.0, 18017.0], [9.1, 18017.0], [9.2, 18017.0], [9.3, 18017.0], [9.4, 18017.0], [9.5, 18017.0], [9.6, 18017.0], [9.7, 18017.0], [9.8, 18017.0], [9.9, 18017.0], [10.0, 18021.0], [10.1, 18021.0], [10.2, 18021.0], [10.3, 18021.0], [10.4, 18021.0], [10.5, 18021.0], [10.6, 18021.0], [10.7, 18021.0], [10.8, 18021.0], [10.9, 18021.0], [11.0, 18124.0], [11.1, 18124.0], [11.2, 18124.0], [11.3, 18124.0], [11.4, 18124.0], [11.5, 18124.0], [11.6, 18124.0], [11.7, 18124.0], [11.8, 18124.0], [11.9, 18124.0], [12.0, 18245.0], [12.1, 18245.0], [12.2, 18245.0], [12.3, 18245.0], [12.4, 18245.0], [12.5, 18245.0], [12.6, 18245.0], [12.7, 18245.0], [12.8, 18245.0], [12.9, 18245.0], [13.0, 18392.0], [13.1, 18392.0], [13.2, 18392.0], [13.3, 18392.0], [13.4, 18392.0], [13.5, 18392.0], [13.6, 18392.0], [13.7, 18392.0], [13.8, 18392.0], [13.9, 18392.0], [14.0, 18405.0], [14.1, 18405.0], [14.2, 18405.0], [14.3, 18405.0], [14.4, 18405.0], [14.5, 18405.0], [14.6, 18405.0], [14.7, 18405.0], [14.8, 18405.0], [14.9, 18405.0], [15.0, 18432.0], [15.1, 18432.0], [15.2, 18432.0], [15.3, 18432.0], [15.4, 18432.0], [15.5, 18432.0], [15.6, 18432.0], [15.7, 18432.0], [15.8, 18432.0], [15.9, 18432.0], [16.0, 18448.0], [16.1, 18448.0], [16.2, 18448.0], [16.3, 18448.0], [16.4, 18448.0], [16.5, 18448.0], [16.6, 18448.0], [16.7, 18448.0], [16.8, 18448.0], [16.9, 18448.0], [17.0, 18504.0], [17.1, 18504.0], [17.2, 18504.0], [17.3, 18504.0], [17.4, 18504.0], [17.5, 18504.0], [17.6, 18504.0], [17.7, 18504.0], [17.8, 18504.0], [17.9, 18504.0], [18.0, 18518.0], [18.1, 18518.0], [18.2, 18518.0], [18.3, 18518.0], [18.4, 18518.0], [18.5, 18518.0], [18.6, 18518.0], [18.7, 18518.0], [18.8, 18518.0], [18.9, 18518.0], [19.0, 18576.0], [19.1, 18576.0], [19.2, 18576.0], [19.3, 18576.0], [19.4, 18576.0], [19.5, 18576.0], [19.6, 18576.0], [19.7, 18576.0], [19.8, 18576.0], [19.9, 18576.0], [20.0, 18622.0], [20.1, 18622.0], [20.2, 18622.0], [20.3, 18622.0], [20.4, 18622.0], [20.5, 18622.0], [20.6, 18622.0], [20.7, 18622.0], [20.8, 18622.0], [20.9, 18622.0], [21.0, 18641.0], [21.1, 18641.0], [21.2, 18641.0], [21.3, 18641.0], [21.4, 18641.0], [21.5, 18641.0], [21.6, 18641.0], [21.7, 18641.0], [21.8, 18641.0], [21.9, 18641.0], [22.0, 18660.0], [22.1, 18660.0], [22.2, 18660.0], [22.3, 18660.0], [22.4, 18660.0], [22.5, 18660.0], [22.6, 18660.0], [22.7, 18660.0], [22.8, 18660.0], [22.9, 18660.0], [23.0, 18676.0], [23.1, 18676.0], [23.2, 18676.0], [23.3, 18676.0], [23.4, 18676.0], [23.5, 18676.0], [23.6, 18676.0], [23.7, 18676.0], [23.8, 18676.0], [23.9, 18676.0], [24.0, 18714.0], [24.1, 18714.0], [24.2, 18714.0], [24.3, 18714.0], [24.4, 18714.0], [24.5, 18714.0], [24.6, 18714.0], [24.7, 18714.0], [24.8, 18714.0], [24.9, 18714.0], [25.0, 18716.0], [25.1, 18716.0], [25.2, 18716.0], [25.3, 18716.0], [25.4, 18716.0], [25.5, 18716.0], [25.6, 18716.0], [25.7, 18716.0], [25.8, 18716.0], [25.9, 18716.0], [26.0, 18728.0], [26.1, 18728.0], [26.2, 18728.0], [26.3, 18728.0], [26.4, 18728.0], [26.5, 18728.0], [26.6, 18728.0], [26.7, 18728.0], [26.8, 18728.0], [26.9, 18728.0], [27.0, 18787.0], [27.1, 18787.0], [27.2, 18787.0], [27.3, 18787.0], [27.4, 18787.0], [27.5, 18787.0], [27.6, 18787.0], [27.7, 18787.0], [27.8, 18787.0], [27.9, 18787.0], [28.0, 18822.0], [28.1, 18822.0], [28.2, 18822.0], [28.3, 18822.0], [28.4, 18822.0], [28.5, 18822.0], [28.6, 18822.0], [28.7, 18822.0], [28.8, 18822.0], [28.9, 18822.0], [29.0, 18826.0], [29.1, 18826.0], [29.2, 18826.0], [29.3, 18826.0], [29.4, 18826.0], [29.5, 18826.0], [29.6, 18826.0], [29.7, 18826.0], [29.8, 18826.0], [29.9, 18826.0], [30.0, 18896.0], [30.1, 18896.0], [30.2, 18896.0], [30.3, 18896.0], [30.4, 18896.0], [30.5, 18896.0], [30.6, 18896.0], [30.7, 18896.0], [30.8, 18896.0], [30.9, 18896.0], [31.0, 18915.0], [31.1, 18915.0], [31.2, 18915.0], [31.3, 18915.0], [31.4, 18915.0], [31.5, 18915.0], [31.6, 18915.0], [31.7, 18915.0], [31.8, 18915.0], [31.9, 18915.0], [32.0, 18982.0], [32.1, 18982.0], [32.2, 18982.0], [32.3, 18982.0], [32.4, 18982.0], [32.5, 18982.0], [32.6, 18982.0], [32.7, 18982.0], [32.8, 18982.0], [32.9, 18982.0], [33.0, 19031.0], [33.1, 19031.0], [33.2, 19031.0], [33.3, 19031.0], [33.4, 19031.0], [33.5, 19031.0], [33.6, 19031.0], [33.7, 19031.0], [33.8, 19031.0], [33.9, 19031.0], [34.0, 19085.0], [34.1, 19085.0], [34.2, 19085.0], [34.3, 19085.0], [34.4, 19085.0], [34.5, 19085.0], [34.6, 19085.0], [34.7, 19085.0], [34.8, 19085.0], [34.9, 19085.0], [35.0, 19100.0], [35.1, 19100.0], [35.2, 19100.0], [35.3, 19100.0], [35.4, 19100.0], [35.5, 19100.0], [35.6, 19100.0], [35.7, 19100.0], [35.8, 19100.0], [35.9, 19100.0], [36.0, 19127.0], [36.1, 19127.0], [36.2, 19127.0], [36.3, 19127.0], [36.4, 19127.0], [36.5, 19127.0], [36.6, 19127.0], [36.7, 19127.0], [36.8, 19127.0], [36.9, 19127.0], [37.0, 19138.0], [37.1, 19138.0], [37.2, 19138.0], [37.3, 19138.0], [37.4, 19138.0], [37.5, 19138.0], [37.6, 19138.0], [37.7, 19138.0], [37.8, 19138.0], [37.9, 19138.0], [38.0, 19143.0], [38.1, 19143.0], [38.2, 19143.0], [38.3, 19143.0], [38.4, 19143.0], [38.5, 19143.0], [38.6, 19143.0], [38.7, 19143.0], [38.8, 19143.0], [38.9, 19143.0], [39.0, 19151.0], [39.1, 19151.0], [39.2, 19151.0], [39.3, 19151.0], [39.4, 19151.0], [39.5, 19151.0], [39.6, 19151.0], [39.7, 19151.0], [39.8, 19151.0], [39.9, 19151.0], [40.0, 19175.0], [40.1, 19175.0], [40.2, 19175.0], [40.3, 19175.0], [40.4, 19175.0], [40.5, 19175.0], [40.6, 19175.0], [40.7, 19175.0], [40.8, 19175.0], [40.9, 19175.0], [41.0, 19184.0], [41.1, 19184.0], [41.2, 19184.0], [41.3, 19184.0], [41.4, 19184.0], [41.5, 19184.0], [41.6, 19184.0], [41.7, 19184.0], [41.8, 19184.0], [41.9, 19184.0], [42.0, 19185.0], [42.1, 19185.0], [42.2, 19185.0], [42.3, 19185.0], [42.4, 19185.0], [42.5, 19185.0], [42.6, 19185.0], [42.7, 19185.0], [42.8, 19185.0], [42.9, 19185.0], [43.0, 19192.0], [43.1, 19192.0], [43.2, 19192.0], [43.3, 19192.0], [43.4, 19192.0], [43.5, 19192.0], [43.6, 19192.0], [43.7, 19192.0], [43.8, 19192.0], [43.9, 19192.0], [44.0, 19217.0], [44.1, 19217.0], [44.2, 19217.0], [44.3, 19217.0], [44.4, 19217.0], [44.5, 19217.0], [44.6, 19217.0], [44.7, 19217.0], [44.8, 19217.0], [44.9, 19217.0], [45.0, 19224.0], [45.1, 19224.0], [45.2, 19224.0], [45.3, 19224.0], [45.4, 19224.0], [45.5, 19224.0], [45.6, 19224.0], [45.7, 19224.0], [45.8, 19224.0], [45.9, 19224.0], [46.0, 19225.0], [46.1, 19225.0], [46.2, 19225.0], [46.3, 19225.0], [46.4, 19225.0], [46.5, 19225.0], [46.6, 19225.0], [46.7, 19225.0], [46.8, 19225.0], [46.9, 19225.0], [47.0, 19234.0], [47.1, 19234.0], [47.2, 19234.0], [47.3, 19234.0], [47.4, 19234.0], [47.5, 19234.0], [47.6, 19234.0], [47.7, 19234.0], [47.8, 19234.0], [47.9, 19234.0], [48.0, 19235.0], [48.1, 19235.0], [48.2, 19235.0], [48.3, 19235.0], [48.4, 19235.0], [48.5, 19235.0], [48.6, 19235.0], [48.7, 19235.0], [48.8, 19235.0], [48.9, 19235.0], [49.0, 19236.0], [49.1, 19236.0], [49.2, 19236.0], [49.3, 19236.0], [49.4, 19236.0], [49.5, 19236.0], [49.6, 19236.0], [49.7, 19236.0], [49.8, 19236.0], [49.9, 19236.0], [50.0, 19239.0], [50.1, 19239.0], [50.2, 19239.0], [50.3, 19239.0], [50.4, 19239.0], [50.5, 19239.0], [50.6, 19239.0], [50.7, 19239.0], [50.8, 19239.0], [50.9, 19239.0], [51.0, 19248.0], [51.1, 19248.0], [51.2, 19248.0], [51.3, 19248.0], [51.4, 19248.0], [51.5, 19248.0], [51.6, 19248.0], [51.7, 19248.0], [51.8, 19248.0], [51.9, 19248.0], [52.0, 19251.0], [52.1, 19251.0], [52.2, 19251.0], [52.3, 19251.0], [52.4, 19251.0], [52.5, 19251.0], [52.6, 19251.0], [52.7, 19251.0], [52.8, 19251.0], [52.9, 19251.0], [53.0, 19251.0], [53.1, 19251.0], [53.2, 19251.0], [53.3, 19251.0], [53.4, 19251.0], [53.5, 19251.0], [53.6, 19251.0], [53.7, 19251.0], [53.8, 19251.0], [53.9, 19251.0], [54.0, 19252.0], [54.1, 19252.0], [54.2, 19252.0], [54.3, 19252.0], [54.4, 19252.0], [54.5, 19252.0], [54.6, 19252.0], [54.7, 19252.0], [54.8, 19252.0], [54.9, 19252.0], [55.0, 19260.0], [55.1, 19260.0], [55.2, 19260.0], [55.3, 19260.0], [55.4, 19260.0], [55.5, 19260.0], [55.6, 19260.0], [55.7, 19260.0], [55.8, 19260.0], [55.9, 19260.0], [56.0, 19301.0], [56.1, 19301.0], [56.2, 19301.0], [56.3, 19301.0], [56.4, 19301.0], [56.5, 19301.0], [56.6, 19301.0], [56.7, 19301.0], [56.8, 19301.0], [56.9, 19301.0], [57.0, 19301.0], [57.1, 19301.0], [57.2, 19301.0], [57.3, 19301.0], [57.4, 19301.0], [57.5, 19301.0], [57.6, 19301.0], [57.7, 19301.0], [57.8, 19301.0], [57.9, 19301.0], [58.0, 19309.0], [58.1, 19309.0], [58.2, 19309.0], [58.3, 19309.0], [58.4, 19309.0], [58.5, 19309.0], [58.6, 19309.0], [58.7, 19309.0], [58.8, 19309.0], [58.9, 19309.0], [59.0, 19332.0], [59.1, 19332.0], [59.2, 19332.0], [59.3, 19332.0], [59.4, 19332.0], [59.5, 19332.0], [59.6, 19332.0], [59.7, 19332.0], [59.8, 19332.0], [59.9, 19332.0], [60.0, 19356.0], [60.1, 19356.0], [60.2, 19356.0], [60.3, 19356.0], [60.4, 19356.0], [60.5, 19356.0], [60.6, 19356.0], [60.7, 19356.0], [60.8, 19356.0], [60.9, 19356.0], [61.0, 19388.0], [61.1, 19388.0], [61.2, 19388.0], [61.3, 19388.0], [61.4, 19388.0], [61.5, 19388.0], [61.6, 19388.0], [61.7, 19388.0], [61.8, 19388.0], [61.9, 19388.0], [62.0, 19388.0], [62.1, 19388.0], [62.2, 19388.0], [62.3, 19388.0], [62.4, 19388.0], [62.5, 19388.0], [62.6, 19388.0], [62.7, 19388.0], [62.8, 19388.0], [62.9, 19388.0], [63.0, 19389.0], [63.1, 19389.0], [63.2, 19389.0], [63.3, 19389.0], [63.4, 19389.0], [63.5, 19389.0], [63.6, 19389.0], [63.7, 19389.0], [63.8, 19389.0], [63.9, 19389.0], [64.0, 19391.0], [64.1, 19391.0], [64.2, 19391.0], [64.3, 19391.0], [64.4, 19391.0], [64.5, 19391.0], [64.6, 19391.0], [64.7, 19391.0], [64.8, 19391.0], [64.9, 19391.0], [65.0, 19392.0], [65.1, 19392.0], [65.2, 19392.0], [65.3, 19392.0], [65.4, 19392.0], [65.5, 19392.0], [65.6, 19392.0], [65.7, 19392.0], [65.8, 19392.0], [65.9, 19392.0], [66.0, 19407.0], [66.1, 19407.0], [66.2, 19407.0], [66.3, 19407.0], [66.4, 19407.0], [66.5, 19407.0], [66.6, 19407.0], [66.7, 19407.0], [66.8, 19407.0], [66.9, 19407.0], [67.0, 19410.0], [67.1, 19410.0], [67.2, 19410.0], [67.3, 19410.0], [67.4, 19410.0], [67.5, 19410.0], [67.6, 19410.0], [67.7, 19410.0], [67.8, 19410.0], [67.9, 19410.0], [68.0, 19410.0], [68.1, 19410.0], [68.2, 19410.0], [68.3, 19410.0], [68.4, 19410.0], [68.5, 19410.0], [68.6, 19410.0], [68.7, 19410.0], [68.8, 19410.0], [68.9, 19410.0], [69.0, 19411.0], [69.1, 19411.0], [69.2, 19411.0], [69.3, 19411.0], [69.4, 19411.0], [69.5, 19411.0], [69.6, 19411.0], [69.7, 19411.0], [69.8, 19411.0], [69.9, 19411.0], [70.0, 19412.0], [70.1, 19412.0], [70.2, 19412.0], [70.3, 19412.0], [70.4, 19412.0], [70.5, 19412.0], [70.6, 19412.0], [70.7, 19412.0], [70.8, 19412.0], [70.9, 19412.0], [71.0, 19416.0], [71.1, 19416.0], [71.2, 19416.0], [71.3, 19416.0], [71.4, 19416.0], [71.5, 19416.0], [71.6, 19416.0], [71.7, 19416.0], [71.8, 19416.0], [71.9, 19416.0], [72.0, 19417.0], [72.1, 19417.0], [72.2, 19417.0], [72.3, 19417.0], [72.4, 19417.0], [72.5, 19417.0], [72.6, 19417.0], [72.7, 19417.0], [72.8, 19417.0], [72.9, 19417.0], [73.0, 19423.0], [73.1, 19423.0], [73.2, 19423.0], [73.3, 19423.0], [73.4, 19423.0], [73.5, 19423.0], [73.6, 19423.0], [73.7, 19423.0], [73.8, 19423.0], [73.9, 19423.0], [74.0, 19431.0], [74.1, 19431.0], [74.2, 19431.0], [74.3, 19431.0], [74.4, 19431.0], [74.5, 19431.0], [74.6, 19431.0], [74.7, 19431.0], [74.8, 19431.0], [74.9, 19431.0], [75.0, 19441.0], [75.1, 19441.0], [75.2, 19441.0], [75.3, 19441.0], [75.4, 19441.0], [75.5, 19441.0], [75.6, 19441.0], [75.7, 19441.0], [75.8, 19441.0], [75.9, 19441.0], [76.0, 19451.0], [76.1, 19451.0], [76.2, 19451.0], [76.3, 19451.0], [76.4, 19451.0], [76.5, 19451.0], [76.6, 19451.0], [76.7, 19451.0], [76.8, 19451.0], [76.9, 19451.0], [77.0, 19456.0], [77.1, 19456.0], [77.2, 19456.0], [77.3, 19456.0], [77.4, 19456.0], [77.5, 19456.0], [77.6, 19456.0], [77.7, 19456.0], [77.8, 19456.0], [77.9, 19456.0], [78.0, 19458.0], [78.1, 19458.0], [78.2, 19458.0], [78.3, 19458.0], [78.4, 19458.0], [78.5, 19458.0], [78.6, 19458.0], [78.7, 19458.0], [78.8, 19458.0], [78.9, 19458.0], [79.0, 19461.0], [79.1, 19461.0], [79.2, 19461.0], [79.3, 19461.0], [79.4, 19461.0], [79.5, 19461.0], [79.6, 19461.0], [79.7, 19461.0], [79.8, 19461.0], [79.9, 19461.0], [80.0, 19462.0], [80.1, 19462.0], [80.2, 19462.0], [80.3, 19462.0], [80.4, 19462.0], [80.5, 19462.0], [80.6, 19462.0], [80.7, 19462.0], [80.8, 19462.0], [80.9, 19462.0], [81.0, 19465.0], [81.1, 19465.0], [81.2, 19465.0], [81.3, 19465.0], [81.4, 19465.0], [81.5, 19465.0], [81.6, 19465.0], [81.7, 19465.0], [81.8, 19465.0], [81.9, 19465.0], [82.0, 19469.0], [82.1, 19469.0], [82.2, 19469.0], [82.3, 19469.0], [82.4, 19469.0], [82.5, 19469.0], [82.6, 19469.0], [82.7, 19469.0], [82.8, 19469.0], [82.9, 19469.0], [83.0, 19470.0], [83.1, 19470.0], [83.2, 19470.0], [83.3, 19470.0], [83.4, 19470.0], [83.5, 19470.0], [83.6, 19470.0], [83.7, 19470.0], [83.8, 19470.0], [83.9, 19470.0], [84.0, 19474.0], [84.1, 19474.0], [84.2, 19474.0], [84.3, 19474.0], [84.4, 19474.0], [84.5, 19474.0], [84.6, 19474.0], [84.7, 19474.0], [84.8, 19474.0], [84.9, 19474.0], [85.0, 19480.0], [85.1, 19480.0], [85.2, 19480.0], [85.3, 19480.0], [85.4, 19480.0], [85.5, 19480.0], [85.6, 19480.0], [85.7, 19480.0], [85.8, 19480.0], [85.9, 19480.0], [86.0, 19485.0], [86.1, 19485.0], [86.2, 19485.0], [86.3, 19485.0], [86.4, 19485.0], [86.5, 19485.0], [86.6, 19485.0], [86.7, 19485.0], [86.8, 19485.0], [86.9, 19485.0], [87.0, 19487.0], [87.1, 19487.0], [87.2, 19487.0], [87.3, 19487.0], [87.4, 19487.0], [87.5, 19487.0], [87.6, 19487.0], [87.7, 19487.0], [87.8, 19487.0], [87.9, 19487.0], [88.0, 19490.0], [88.1, 19490.0], [88.2, 19490.0], [88.3, 19490.0], [88.4, 19490.0], [88.5, 19490.0], [88.6, 19490.0], [88.7, 19490.0], [88.8, 19490.0], [88.9, 19490.0], [89.0, 19490.0], [89.1, 19490.0], [89.2, 19490.0], [89.3, 19490.0], [89.4, 19490.0], [89.5, 19490.0], [89.6, 19490.0], [89.7, 19490.0], [89.8, 19490.0], [89.9, 19490.0], [90.0, 19495.0], [90.1, 19495.0], [90.2, 19495.0], [90.3, 19495.0], [90.4, 19495.0], [90.5, 19495.0], [90.6, 19495.0], [90.7, 19495.0], [90.8, 19495.0], [90.9, 19495.0], [91.0, 19496.0], [91.1, 19496.0], [91.2, 19496.0], [91.3, 19496.0], [91.4, 19496.0], [91.5, 19496.0], [91.6, 19496.0], [91.7, 19496.0], [91.8, 19496.0], [91.9, 19496.0], [92.0, 19497.0], [92.1, 19497.0], [92.2, 19497.0], [92.3, 19497.0], [92.4, 19497.0], [92.5, 19497.0], [92.6, 19497.0], [92.7, 19497.0], [92.8, 19497.0], [92.9, 19497.0], [93.0, 19514.0], [93.1, 19514.0], [93.2, 19514.0], [93.3, 19514.0], [93.4, 19514.0], [93.5, 19514.0], [93.6, 19514.0], [93.7, 19514.0], [93.8, 19514.0], [93.9, 19514.0], [94.0, 19522.0], [94.1, 19522.0], [94.2, 19522.0], [94.3, 19522.0], [94.4, 19522.0], [94.5, 19522.0], [94.6, 19522.0], [94.7, 19522.0], [94.8, 19522.0], [94.9, 19522.0], [95.0, 19524.0], [95.1, 19524.0], [95.2, 19524.0], [95.3, 19524.0], [95.4, 19524.0], [95.5, 19524.0], [95.6, 19524.0], [95.7, 19524.0], [95.8, 19524.0], [95.9, 19524.0], [96.0, 19558.0], [96.1, 19558.0], [96.2, 19558.0], [96.3, 19558.0], [96.4, 19558.0], [96.5, 19558.0], [96.6, 19558.0], [96.7, 19558.0], [96.8, 19558.0], [96.9, 19558.0], [97.0, 19573.0], [97.1, 19573.0], [97.2, 19573.0], [97.3, 19573.0], [97.4, 19573.0], [97.5, 19573.0], [97.6, 19573.0], [97.7, 19573.0], [97.8, 19573.0], [97.9, 19573.0], [98.0, 19606.0], [98.1, 19606.0], [98.2, 19606.0], [98.3, 19606.0], [98.4, 19606.0], [98.5, 19606.0], [98.6, 19606.0], [98.7, 19606.0], [98.8, 19606.0], [98.9, 19606.0], [99.0, 19606.0], [99.1, 19606.0], [99.2, 19606.0], [99.3, 19606.0], [99.4, 19606.0], [99.5, 19606.0], [99.6, 19606.0], [99.7, 19606.0], [99.8, 19606.0], [99.9, 19606.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 13900.0, "maxY": 27.0, "series": [{"data": [[13900.0, 1.0], [14300.0, 1.0], [14700.0, 1.0], [15900.0, 1.0], [16200.0, 1.0], [17600.0, 1.0], [17800.0, 1.0], [17900.0, 2.0], [18000.0, 2.0], [18100.0, 1.0], [18200.0, 1.0], [18300.0, 1.0], [18400.0, 3.0], [19200.0, 12.0], [18500.0, 3.0], [18600.0, 4.0], [18700.0, 4.0], [18800.0, 3.0], [18900.0, 2.0], [19000.0, 2.0], [19100.0, 9.0], [19300.0, 10.0], [19400.0, 27.0], [19500.0, 5.0], [19600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 54.8, "minX": 1.66835994E12, "maxY": 54.8, "series": [{"data": [[1.66835994E12, 54.8]], "isOverall": false, "label": "client-to-gateway-caching", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66835994E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13922.0, "minX": 1.0, "maxY": 19606.0, "series": [{"data": [[2.0, 19606.0], [3.0, 19573.0], [5.0, 19558.0], [18.0, 19520.0], [26.0, 19490.0], [27.0, 19496.5], [28.0, 19495.0], [29.0, 19485.0], [30.0, 19487.0], [31.0, 19490.0], [32.0, 19462.454545454544], [39.0, 19431.0], [41.0, 19383.88888888889], [40.0, 19414.5], [43.0, 19309.0], [44.0, 19301.0], [47.0, 19260.0], [51.0, 19252.0], [53.0, 19236.0], [52.0, 19250.0], [55.0, 19225.0], [54.0, 19224.0], [56.0, 19217.0], [59.0, 19184.0], [58.0, 19188.5], [61.0, 19151.0], [60.0, 19175.0], [63.0, 19138.0], [62.0, 19143.0], [67.0, 19031.0], [66.0, 19085.0], [65.0, 19100.0], [64.0, 19127.0], [71.0, 18822.0], [70.0, 18896.0], [69.0, 18915.0], [68.0, 18982.0], [75.0, 18714.0], [74.0, 18728.0], [73.0, 18787.0], [72.0, 18826.0], [79.0, 18641.0], [78.0, 18660.0], [77.0, 18676.0], [76.0, 18716.0], [83.0, 18504.0], [82.0, 18518.0], [81.0, 18576.0], [80.0, 18622.0], [87.0, 18392.0], [86.0, 18405.0], [85.0, 18432.0], [84.0, 18448.0], [91.0, 18017.0], [90.0, 18021.0], [89.0, 18124.0], [88.0, 18245.0], [95.0, 17664.0], [94.0, 17882.0], [93.0, 17930.0], [92.0, 17943.0], [99.0, 14388.0], [98.0, 14790.0], [97.0, 15946.0], [96.0, 16293.0], [100.0, 13922.0], [1.0, 19606.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[54.8, 18895.22000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 320.0, "minX": 1.66835994E12, "maxY": 1.8863903333333332E7, "series": [{"data": [[1.66835994E12, 1.8863903333333332E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66835994E12, 320.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66835994E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 18895.22000000001, "minX": 1.66835994E12, "maxY": 18895.22000000001, "series": [{"data": [[1.66835994E12, 18895.22000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66835994E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1653.1999999999998, "minX": 1.66835994E12, "maxY": 1653.1999999999998, "series": [{"data": [[1.66835994E12, 1653.1999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66835994E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 58.61000000000002, "minX": 1.66835994E12, "maxY": 58.61000000000002, "series": [{"data": [[1.66835994E12, 58.61000000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66835994E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13922.0, "minX": 1.66835994E12, "maxY": 19606.0, "series": [{"data": [[1.66835994E12, 19606.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66835994E12, 19494.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66835994E12, 19606.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66835994E12, 19523.9]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66835994E12, 13922.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66835994E12, 19237.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66835994E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13922.0, "minX": 1.0, "maxY": 19461.5, "series": [{"data": [[1.0, 13922.0], [2.0, 15368.0], [8.0, 17980.0], [40.0, 19461.5], [47.0, 19127.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 154.0, "minX": 1.0, "maxY": 1948.0, "series": [{"data": [[1.0, 154.0], [2.0, 243.0], [8.0, 555.5], [40.0, 1948.0], [47.0, 1718.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66835994E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66835994E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66835994E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66835994E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66835994E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66835994E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66835994E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66835994E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66835994E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66835994E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66835994E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66835994E12, "title": "Total Transactions Per Second"}},
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

