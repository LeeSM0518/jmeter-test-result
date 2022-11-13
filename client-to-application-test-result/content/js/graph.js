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
        data: {"result": {"minY": 5690.0, "minX": 0.0, "maxY": 62706.0, "series": [{"data": [[0.0, 5690.0], [0.1, 5690.0], [0.2, 5690.0], [0.3, 5690.0], [0.4, 5690.0], [0.5, 5690.0], [0.6, 5690.0], [0.7, 5690.0], [0.8, 5690.0], [0.9, 5690.0], [1.0, 6012.0], [1.1, 6012.0], [1.2, 6012.0], [1.3, 6012.0], [1.4, 6012.0], [1.5, 6012.0], [1.6, 6012.0], [1.7, 6012.0], [1.8, 6012.0], [1.9, 6012.0], [2.0, 6435.0], [2.1, 6435.0], [2.2, 6435.0], [2.3, 6435.0], [2.4, 6435.0], [2.5, 6435.0], [2.6, 6435.0], [2.7, 6435.0], [2.8, 6435.0], [2.9, 6435.0], [3.0, 6631.0], [3.1, 6631.0], [3.2, 6631.0], [3.3, 6631.0], [3.4, 6631.0], [3.5, 6631.0], [3.6, 6631.0], [3.7, 6631.0], [3.8, 6631.0], [3.9, 6631.0], [4.0, 6678.0], [4.1, 6678.0], [4.2, 6678.0], [4.3, 6678.0], [4.4, 6678.0], [4.5, 6678.0], [4.6, 6678.0], [4.7, 6678.0], [4.8, 6678.0], [4.9, 6678.0], [5.0, 6698.0], [5.1, 6698.0], [5.2, 6698.0], [5.3, 6698.0], [5.4, 6698.0], [5.5, 6698.0], [5.6, 6698.0], [5.7, 6698.0], [5.8, 6698.0], [5.9, 6698.0], [6.0, 6702.0], [6.1, 6702.0], [6.2, 6702.0], [6.3, 6702.0], [6.4, 6702.0], [6.5, 6702.0], [6.6, 6702.0], [6.7, 6702.0], [6.8, 6702.0], [6.9, 6702.0], [7.0, 7154.0], [7.1, 7154.0], [7.2, 7154.0], [7.3, 7154.0], [7.4, 7154.0], [7.5, 7154.0], [7.6, 7154.0], [7.7, 7154.0], [7.8, 7154.0], [7.9, 7154.0], [8.0, 7341.0], [8.1, 7341.0], [8.2, 7341.0], [8.3, 7341.0], [8.4, 7341.0], [8.5, 7341.0], [8.6, 7341.0], [8.7, 7341.0], [8.8, 7341.0], [8.9, 7341.0], [9.0, 7423.0], [9.1, 7423.0], [9.2, 7423.0], [9.3, 7423.0], [9.4, 7423.0], [9.5, 7423.0], [9.6, 7423.0], [9.7, 7423.0], [9.8, 7423.0], [9.9, 7423.0], [10.0, 10607.0], [10.1, 10607.0], [10.2, 10607.0], [10.3, 10607.0], [10.4, 10607.0], [10.5, 10607.0], [10.6, 10607.0], [10.7, 10607.0], [10.8, 10607.0], [10.9, 10607.0], [11.0, 12367.0], [11.1, 12367.0], [11.2, 12367.0], [11.3, 12367.0], [11.4, 12367.0], [11.5, 12367.0], [11.6, 12367.0], [11.7, 12367.0], [11.8, 12367.0], [11.9, 12367.0], [12.0, 12936.0], [12.1, 12936.0], [12.2, 12936.0], [12.3, 12936.0], [12.4, 12936.0], [12.5, 12936.0], [12.6, 12936.0], [12.7, 12936.0], [12.8, 12936.0], [12.9, 12936.0], [13.0, 12999.0], [13.1, 12999.0], [13.2, 12999.0], [13.3, 12999.0], [13.4, 12999.0], [13.5, 12999.0], [13.6, 12999.0], [13.7, 12999.0], [13.8, 12999.0], [13.9, 12999.0], [14.0, 13219.0], [14.1, 13219.0], [14.2, 13219.0], [14.3, 13219.0], [14.4, 13219.0], [14.5, 13219.0], [14.6, 13219.0], [14.7, 13219.0], [14.8, 13219.0], [14.9, 13219.0], [15.0, 13277.0], [15.1, 13277.0], [15.2, 13277.0], [15.3, 13277.0], [15.4, 13277.0], [15.5, 13277.0], [15.6, 13277.0], [15.7, 13277.0], [15.8, 13277.0], [15.9, 13277.0], [16.0, 13669.0], [16.1, 13669.0], [16.2, 13669.0], [16.3, 13669.0], [16.4, 13669.0], [16.5, 13669.0], [16.6, 13669.0], [16.7, 13669.0], [16.8, 13669.0], [16.9, 13669.0], [17.0, 13727.0], [17.1, 13727.0], [17.2, 13727.0], [17.3, 13727.0], [17.4, 13727.0], [17.5, 13727.0], [17.6, 13727.0], [17.7, 13727.0], [17.8, 13727.0], [17.9, 13727.0], [18.0, 13747.0], [18.1, 13747.0], [18.2, 13747.0], [18.3, 13747.0], [18.4, 13747.0], [18.5, 13747.0], [18.6, 13747.0], [18.7, 13747.0], [18.8, 13747.0], [18.9, 13747.0], [19.0, 13822.0], [19.1, 13822.0], [19.2, 13822.0], [19.3, 13822.0], [19.4, 13822.0], [19.5, 13822.0], [19.6, 13822.0], [19.7, 13822.0], [19.8, 13822.0], [19.9, 13822.0], [20.0, 16169.0], [20.1, 16169.0], [20.2, 16169.0], [20.3, 16169.0], [20.4, 16169.0], [20.5, 16169.0], [20.6, 16169.0], [20.7, 16169.0], [20.8, 16169.0], [20.9, 16169.0], [21.0, 17538.0], [21.1, 17538.0], [21.2, 17538.0], [21.3, 17538.0], [21.4, 17538.0], [21.5, 17538.0], [21.6, 17538.0], [21.7, 17538.0], [21.8, 17538.0], [21.9, 17538.0], [22.0, 17842.0], [22.1, 17842.0], [22.2, 17842.0], [22.3, 17842.0], [22.4, 17842.0], [22.5, 17842.0], [22.6, 17842.0], [22.7, 17842.0], [22.8, 17842.0], [22.9, 17842.0], [23.0, 18575.0], [23.1, 18575.0], [23.2, 18575.0], [23.3, 18575.0], [23.4, 18575.0], [23.5, 18575.0], [23.6, 18575.0], [23.7, 18575.0], [23.8, 18575.0], [23.9, 18575.0], [24.0, 18987.0], [24.1, 18987.0], [24.2, 18987.0], [24.3, 18987.0], [24.4, 18987.0], [24.5, 18987.0], [24.6, 18987.0], [24.7, 18987.0], [24.8, 18987.0], [24.9, 18987.0], [25.0, 19002.0], [25.1, 19002.0], [25.2, 19002.0], [25.3, 19002.0], [25.4, 19002.0], [25.5, 19002.0], [25.6, 19002.0], [25.7, 19002.0], [25.8, 19002.0], [25.9, 19002.0], [26.0, 20304.0], [26.1, 20304.0], [26.2, 20304.0], [26.3, 20304.0], [26.4, 20304.0], [26.5, 20304.0], [26.6, 20304.0], [26.7, 20304.0], [26.8, 20304.0], [26.9, 20304.0], [27.0, 20387.0], [27.1, 20387.0], [27.2, 20387.0], [27.3, 20387.0], [27.4, 20387.0], [27.5, 20387.0], [27.6, 20387.0], [27.7, 20387.0], [27.8, 20387.0], [27.9, 20387.0], [28.0, 20558.0], [28.1, 20558.0], [28.2, 20558.0], [28.3, 20558.0], [28.4, 20558.0], [28.5, 20558.0], [28.6, 20558.0], [28.7, 20558.0], [28.8, 20558.0], [28.9, 20558.0], [29.0, 20635.0], [29.1, 20635.0], [29.2, 20635.0], [29.3, 20635.0], [29.4, 20635.0], [29.5, 20635.0], [29.6, 20635.0], [29.7, 20635.0], [29.8, 20635.0], [29.9, 20635.0], [30.0, 22271.0], [30.1, 22271.0], [30.2, 22271.0], [30.3, 22271.0], [30.4, 22271.0], [30.5, 22271.0], [30.6, 22271.0], [30.7, 22271.0], [30.8, 22271.0], [30.9, 22271.0], [31.0, 23677.0], [31.1, 23677.0], [31.2, 23677.0], [31.3, 23677.0], [31.4, 23677.0], [31.5, 23677.0], [31.6, 23677.0], [31.7, 23677.0], [31.8, 23677.0], [31.9, 23677.0], [32.0, 24770.0], [32.1, 24770.0], [32.2, 24770.0], [32.3, 24770.0], [32.4, 24770.0], [32.5, 24770.0], [32.6, 24770.0], [32.7, 24770.0], [32.8, 24770.0], [32.9, 24770.0], [33.0, 24819.0], [33.1, 24819.0], [33.2, 24819.0], [33.3, 24819.0], [33.4, 24819.0], [33.5, 24819.0], [33.6, 24819.0], [33.7, 24819.0], [33.8, 24819.0], [33.9, 24819.0], [34.0, 25166.0], [34.1, 25166.0], [34.2, 25166.0], [34.3, 25166.0], [34.4, 25166.0], [34.5, 25166.0], [34.6, 25166.0], [34.7, 25166.0], [34.8, 25166.0], [34.9, 25166.0], [35.0, 26348.0], [35.1, 26348.0], [35.2, 26348.0], [35.3, 26348.0], [35.4, 26348.0], [35.5, 26348.0], [35.6, 26348.0], [35.7, 26348.0], [35.8, 26348.0], [35.9, 26348.0], [36.0, 26578.0], [36.1, 26578.0], [36.2, 26578.0], [36.3, 26578.0], [36.4, 26578.0], [36.5, 26578.0], [36.6, 26578.0], [36.7, 26578.0], [36.8, 26578.0], [36.9, 26578.0], [37.0, 26597.0], [37.1, 26597.0], [37.2, 26597.0], [37.3, 26597.0], [37.4, 26597.0], [37.5, 26597.0], [37.6, 26597.0], [37.7, 26597.0], [37.8, 26597.0], [37.9, 26597.0], [38.0, 26599.0], [38.1, 26599.0], [38.2, 26599.0], [38.3, 26599.0], [38.4, 26599.0], [38.5, 26599.0], [38.6, 26599.0], [38.7, 26599.0], [38.8, 26599.0], [38.9, 26599.0], [39.0, 26771.0], [39.1, 26771.0], [39.2, 26771.0], [39.3, 26771.0], [39.4, 26771.0], [39.5, 26771.0], [39.6, 26771.0], [39.7, 26771.0], [39.8, 26771.0], [39.9, 26771.0], [40.0, 28732.0], [40.1, 28732.0], [40.2, 28732.0], [40.3, 28732.0], [40.4, 28732.0], [40.5, 28732.0], [40.6, 28732.0], [40.7, 28732.0], [40.8, 28732.0], [40.9, 28732.0], [41.0, 29217.0], [41.1, 29217.0], [41.2, 29217.0], [41.3, 29217.0], [41.4, 29217.0], [41.5, 29217.0], [41.6, 29217.0], [41.7, 29217.0], [41.8, 29217.0], [41.9, 29217.0], [42.0, 30418.0], [42.1, 30418.0], [42.2, 30418.0], [42.3, 30418.0], [42.4, 30418.0], [42.5, 30418.0], [42.6, 30418.0], [42.7, 30418.0], [42.8, 30418.0], [42.9, 30418.0], [43.0, 31145.0], [43.1, 31145.0], [43.2, 31145.0], [43.3, 31145.0], [43.4, 31145.0], [43.5, 31145.0], [43.6, 31145.0], [43.7, 31145.0], [43.8, 31145.0], [43.9, 31145.0], [44.0, 32062.0], [44.1, 32062.0], [44.2, 32062.0], [44.3, 32062.0], [44.4, 32062.0], [44.5, 32062.0], [44.6, 32062.0], [44.7, 32062.0], [44.8, 32062.0], [44.9, 32062.0], [45.0, 32317.0], [45.1, 32317.0], [45.2, 32317.0], [45.3, 32317.0], [45.4, 32317.0], [45.5, 32317.0], [45.6, 32317.0], [45.7, 32317.0], [45.8, 32317.0], [45.9, 32317.0], [46.0, 32373.0], [46.1, 32373.0], [46.2, 32373.0], [46.3, 32373.0], [46.4, 32373.0], [46.5, 32373.0], [46.6, 32373.0], [46.7, 32373.0], [46.8, 32373.0], [46.9, 32373.0], [47.0, 32788.0], [47.1, 32788.0], [47.2, 32788.0], [47.3, 32788.0], [47.4, 32788.0], [47.5, 32788.0], [47.6, 32788.0], [47.7, 32788.0], [47.8, 32788.0], [47.9, 32788.0], [48.0, 33029.0], [48.1, 33029.0], [48.2, 33029.0], [48.3, 33029.0], [48.4, 33029.0], [48.5, 33029.0], [48.6, 33029.0], [48.7, 33029.0], [48.8, 33029.0], [48.9, 33029.0], [49.0, 33266.0], [49.1, 33266.0], [49.2, 33266.0], [49.3, 33266.0], [49.4, 33266.0], [49.5, 33266.0], [49.6, 33266.0], [49.7, 33266.0], [49.8, 33266.0], [49.9, 33266.0], [50.0, 34088.0], [50.1, 34088.0], [50.2, 34088.0], [50.3, 34088.0], [50.4, 34088.0], [50.5, 34088.0], [50.6, 34088.0], [50.7, 34088.0], [50.8, 34088.0], [50.9, 34088.0], [51.0, 34567.0], [51.1, 34567.0], [51.2, 34567.0], [51.3, 34567.0], [51.4, 34567.0], [51.5, 34567.0], [51.6, 34567.0], [51.7, 34567.0], [51.8, 34567.0], [51.9, 34567.0], [52.0, 36636.0], [52.1, 36636.0], [52.2, 36636.0], [52.3, 36636.0], [52.4, 36636.0], [52.5, 36636.0], [52.6, 36636.0], [52.7, 36636.0], [52.8, 36636.0], [52.9, 36636.0], [53.0, 37414.0], [53.1, 37414.0], [53.2, 37414.0], [53.3, 37414.0], [53.4, 37414.0], [53.5, 37414.0], [53.6, 37414.0], [53.7, 37414.0], [53.8, 37414.0], [53.9, 37414.0], [54.0, 38466.0], [54.1, 38466.0], [54.2, 38466.0], [54.3, 38466.0], [54.4, 38466.0], [54.5, 38466.0], [54.6, 38466.0], [54.7, 38466.0], [54.8, 38466.0], [54.9, 38466.0], [55.0, 38855.0], [55.1, 38855.0], [55.2, 38855.0], [55.3, 38855.0], [55.4, 38855.0], [55.5, 38855.0], [55.6, 38855.0], [55.7, 38855.0], [55.8, 38855.0], [55.9, 38855.0], [56.0, 39051.0], [56.1, 39051.0], [56.2, 39051.0], [56.3, 39051.0], [56.4, 39051.0], [56.5, 39051.0], [56.6, 39051.0], [56.7, 39051.0], [56.8, 39051.0], [56.9, 39051.0], [57.0, 39085.0], [57.1, 39085.0], [57.2, 39085.0], [57.3, 39085.0], [57.4, 39085.0], [57.5, 39085.0], [57.6, 39085.0], [57.7, 39085.0], [57.8, 39085.0], [57.9, 39085.0], [58.0, 39181.0], [58.1, 39181.0], [58.2, 39181.0], [58.3, 39181.0], [58.4, 39181.0], [58.5, 39181.0], [58.6, 39181.0], [58.7, 39181.0], [58.8, 39181.0], [58.9, 39181.0], [59.0, 39267.0], [59.1, 39267.0], [59.2, 39267.0], [59.3, 39267.0], [59.4, 39267.0], [59.5, 39267.0], [59.6, 39267.0], [59.7, 39267.0], [59.8, 39267.0], [59.9, 39267.0], [60.0, 40253.0], [60.1, 40253.0], [60.2, 40253.0], [60.3, 40253.0], [60.4, 40253.0], [60.5, 40253.0], [60.6, 40253.0], [60.7, 40253.0], [60.8, 40253.0], [60.9, 40253.0], [61.0, 40884.0], [61.1, 40884.0], [61.2, 40884.0], [61.3, 40884.0], [61.4, 40884.0], [61.5, 40884.0], [61.6, 40884.0], [61.7, 40884.0], [61.8, 40884.0], [61.9, 40884.0], [62.0, 42254.0], [62.1, 42254.0], [62.2, 42254.0], [62.3, 42254.0], [62.4, 42254.0], [62.5, 42254.0], [62.6, 42254.0], [62.7, 42254.0], [62.8, 42254.0], [62.9, 42254.0], [63.0, 43862.0], [63.1, 43862.0], [63.2, 43862.0], [63.3, 43862.0], [63.4, 43862.0], [63.5, 43862.0], [63.6, 43862.0], [63.7, 43862.0], [63.8, 43862.0], [63.9, 43862.0], [64.0, 44823.0], [64.1, 44823.0], [64.2, 44823.0], [64.3, 44823.0], [64.4, 44823.0], [64.5, 44823.0], [64.6, 44823.0], [64.7, 44823.0], [64.8, 44823.0], [64.9, 44823.0], [65.0, 44870.0], [65.1, 44870.0], [65.2, 44870.0], [65.3, 44870.0], [65.4, 44870.0], [65.5, 44870.0], [65.6, 44870.0], [65.7, 44870.0], [65.8, 44870.0], [65.9, 44870.0], [66.0, 45890.0], [66.1, 45890.0], [66.2, 45890.0], [66.3, 45890.0], [66.4, 45890.0], [66.5, 45890.0], [66.6, 45890.0], [66.7, 45890.0], [66.8, 45890.0], [66.9, 45890.0], [67.0, 46173.0], [67.1, 46173.0], [67.2, 46173.0], [67.3, 46173.0], [67.4, 46173.0], [67.5, 46173.0], [67.6, 46173.0], [67.7, 46173.0], [67.8, 46173.0], [67.9, 46173.0], [68.0, 46250.0], [68.1, 46250.0], [68.2, 46250.0], [68.3, 46250.0], [68.4, 46250.0], [68.5, 46250.0], [68.6, 46250.0], [68.7, 46250.0], [68.8, 46250.0], [68.9, 46250.0], [69.0, 46276.0], [69.1, 46276.0], [69.2, 46276.0], [69.3, 46276.0], [69.4, 46276.0], [69.5, 46276.0], [69.6, 46276.0], [69.7, 46276.0], [69.8, 46276.0], [69.9, 46276.0], [70.0, 46570.0], [70.1, 46570.0], [70.2, 46570.0], [70.3, 46570.0], [70.4, 46570.0], [70.5, 46570.0], [70.6, 46570.0], [70.7, 46570.0], [70.8, 46570.0], [70.9, 46570.0], [71.0, 46599.0], [71.1, 46599.0], [71.2, 46599.0], [71.3, 46599.0], [71.4, 46599.0], [71.5, 46599.0], [71.6, 46599.0], [71.7, 46599.0], [71.8, 46599.0], [71.9, 46599.0], [72.0, 48628.0], [72.1, 48628.0], [72.2, 48628.0], [72.3, 48628.0], [72.4, 48628.0], [72.5, 48628.0], [72.6, 48628.0], [72.7, 48628.0], [72.8, 48628.0], [72.9, 48628.0], [73.0, 49450.0], [73.1, 49450.0], [73.2, 49450.0], [73.3, 49450.0], [73.4, 49450.0], [73.5, 49450.0], [73.6, 49450.0], [73.7, 49450.0], [73.8, 49450.0], [73.9, 49450.0], [74.0, 49847.0], [74.1, 49847.0], [74.2, 49847.0], [74.3, 49847.0], [74.4, 49847.0], [74.5, 49847.0], [74.6, 49847.0], [74.7, 49847.0], [74.8, 49847.0], [74.9, 49847.0], [75.0, 49859.0], [75.1, 49859.0], [75.2, 49859.0], [75.3, 49859.0], [75.4, 49859.0], [75.5, 49859.0], [75.6, 49859.0], [75.7, 49859.0], [75.8, 49859.0], [75.9, 49859.0], [76.0, 51033.0], [76.1, 51033.0], [76.2, 51033.0], [76.3, 51033.0], [76.4, 51033.0], [76.5, 51033.0], [76.6, 51033.0], [76.7, 51033.0], [76.8, 51033.0], [76.9, 51033.0], [77.0, 52547.0], [77.1, 52547.0], [77.2, 52547.0], [77.3, 52547.0], [77.4, 52547.0], [77.5, 52547.0], [77.6, 52547.0], [77.7, 52547.0], [77.8, 52547.0], [77.9, 52547.0], [78.0, 52645.0], [78.1, 52645.0], [78.2, 52645.0], [78.3, 52645.0], [78.4, 52645.0], [78.5, 52645.0], [78.6, 52645.0], [78.7, 52645.0], [78.8, 52645.0], [78.9, 52645.0], [79.0, 52774.0], [79.1, 52774.0], [79.2, 52774.0], [79.3, 52774.0], [79.4, 52774.0], [79.5, 52774.0], [79.6, 52774.0], [79.7, 52774.0], [79.8, 52774.0], [79.9, 52774.0], [80.0, 52790.0], [80.1, 52790.0], [80.2, 52790.0], [80.3, 52790.0], [80.4, 52790.0], [80.5, 52790.0], [80.6, 52790.0], [80.7, 52790.0], [80.8, 52790.0], [80.9, 52790.0], [81.0, 52814.0], [81.1, 52814.0], [81.2, 52814.0], [81.3, 52814.0], [81.4, 52814.0], [81.5, 52814.0], [81.6, 52814.0], [81.7, 52814.0], [81.8, 52814.0], [81.9, 52814.0], [82.0, 55164.0], [82.1, 55164.0], [82.2, 55164.0], [82.3, 55164.0], [82.4, 55164.0], [82.5, 55164.0], [82.6, 55164.0], [82.7, 55164.0], [82.8, 55164.0], [82.9, 55164.0], [83.0, 55176.0], [83.1, 55176.0], [83.2, 55176.0], [83.3, 55176.0], [83.4, 55176.0], [83.5, 55176.0], [83.6, 55176.0], [83.7, 55176.0], [83.8, 55176.0], [83.9, 55176.0], [84.0, 56005.0], [84.1, 56005.0], [84.2, 56005.0], [84.3, 56005.0], [84.4, 56005.0], [84.5, 56005.0], [84.6, 56005.0], [84.7, 56005.0], [84.8, 56005.0], [84.9, 56005.0], [85.0, 56195.0], [85.1, 56195.0], [85.2, 56195.0], [85.3, 56195.0], [85.4, 56195.0], [85.5, 56195.0], [85.6, 56195.0], [85.7, 56195.0], [85.8, 56195.0], [85.9, 56195.0], [86.0, 58451.0], [86.1, 58451.0], [86.2, 58451.0], [86.3, 58451.0], [86.4, 58451.0], [86.5, 58451.0], [86.6, 58451.0], [86.7, 58451.0], [86.8, 58451.0], [86.9, 58451.0], [87.0, 59138.0], [87.1, 59138.0], [87.2, 59138.0], [87.3, 59138.0], [87.4, 59138.0], [87.5, 59138.0], [87.6, 59138.0], [87.7, 59138.0], [87.8, 59138.0], [87.9, 59138.0], [88.0, 59163.0], [88.1, 59163.0], [88.2, 59163.0], [88.3, 59163.0], [88.4, 59163.0], [88.5, 59163.0], [88.6, 59163.0], [88.7, 59163.0], [88.8, 59163.0], [88.9, 59163.0], [89.0, 59527.0], [89.1, 59527.0], [89.2, 59527.0], [89.3, 59527.0], [89.4, 59527.0], [89.5, 59527.0], [89.6, 59527.0], [89.7, 59527.0], [89.8, 59527.0], [89.9, 59527.0], [90.0, 59713.0], [90.1, 59713.0], [90.2, 59713.0], [90.3, 59713.0], [90.4, 59713.0], [90.5, 59713.0], [90.6, 59713.0], [90.7, 59713.0], [90.8, 59713.0], [90.9, 59713.0], [91.0, 59866.0], [91.1, 59866.0], [91.2, 59866.0], [91.3, 59866.0], [91.4, 59866.0], [91.5, 59866.0], [91.6, 59866.0], [91.7, 59866.0], [91.8, 59866.0], [91.9, 59866.0], [92.0, 60909.0], [92.1, 60909.0], [92.2, 60909.0], [92.3, 60909.0], [92.4, 60909.0], [92.5, 60909.0], [92.6, 60909.0], [92.7, 60909.0], [92.8, 60909.0], [92.9, 60909.0], [93.0, 60922.0], [93.1, 60922.0], [93.2, 60922.0], [93.3, 60922.0], [93.4, 60922.0], [93.5, 60922.0], [93.6, 60922.0], [93.7, 60922.0], [93.8, 60922.0], [93.9, 60922.0], [94.0, 61485.0], [94.1, 61485.0], [94.2, 61485.0], [94.3, 61485.0], [94.4, 61485.0], [94.5, 61485.0], [94.6, 61485.0], [94.7, 61485.0], [94.8, 61485.0], [94.9, 61485.0], [95.0, 61595.0], [95.1, 61595.0], [95.2, 61595.0], [95.3, 61595.0], [95.4, 61595.0], [95.5, 61595.0], [95.6, 61595.0], [95.7, 61595.0], [95.8, 61595.0], [95.9, 61595.0], [96.0, 62512.0], [96.1, 62512.0], [96.2, 62512.0], [96.3, 62512.0], [96.4, 62512.0], [96.5, 62512.0], [96.6, 62512.0], [96.7, 62512.0], [96.8, 62512.0], [96.9, 62512.0], [97.0, 62650.0], [97.1, 62650.0], [97.2, 62650.0], [97.3, 62650.0], [97.4, 62650.0], [97.5, 62650.0], [97.6, 62650.0], [97.7, 62650.0], [97.8, 62650.0], [97.9, 62650.0], [98.0, 62676.0], [98.1, 62676.0], [98.2, 62676.0], [98.3, 62676.0], [98.4, 62676.0], [98.5, 62676.0], [98.6, 62676.0], [98.7, 62676.0], [98.8, 62676.0], [98.9, 62676.0], [99.0, 62706.0], [99.1, 62706.0], [99.2, 62706.0], [99.3, 62706.0], [99.4, 62706.0], [99.5, 62706.0], [99.6, 62706.0], [99.7, 62706.0], [99.8, 62706.0], [99.9, 62706.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5600.0, "maxY": 3.0, "series": [{"data": [[5600.0, 1.0], [6000.0, 1.0], [6400.0, 1.0], [6600.0, 3.0], [6700.0, 1.0], [7100.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [10600.0, 1.0], [12300.0, 1.0], [12900.0, 2.0], [13200.0, 2.0], [13600.0, 1.0], [13700.0, 2.0], [13800.0, 1.0], [16100.0, 1.0], [17500.0, 1.0], [17800.0, 1.0], [18500.0, 1.0], [18900.0, 1.0], [19000.0, 1.0], [20300.0, 2.0], [20500.0, 1.0], [20600.0, 1.0], [22200.0, 1.0], [23600.0, 1.0], [24800.0, 1.0], [24700.0, 1.0], [25100.0, 1.0], [26300.0, 1.0], [26500.0, 3.0], [26700.0, 1.0], [28700.0, 1.0], [29200.0, 1.0], [30400.0, 1.0], [31100.0, 1.0], [32000.0, 1.0], [32300.0, 2.0], [32700.0, 1.0], [33000.0, 1.0], [33200.0, 1.0], [34000.0, 1.0], [34500.0, 1.0], [36600.0, 1.0], [37400.0, 1.0], [38400.0, 1.0], [38800.0, 1.0], [39000.0, 2.0], [39100.0, 1.0], [39200.0, 1.0], [40200.0, 1.0], [40800.0, 1.0], [42200.0, 1.0], [43800.0, 1.0], [44800.0, 2.0], [45800.0, 1.0], [46100.0, 1.0], [46200.0, 2.0], [46500.0, 2.0], [48600.0, 1.0], [49400.0, 1.0], [49800.0, 2.0], [51000.0, 1.0], [52500.0, 1.0], [52600.0, 1.0], [52700.0, 2.0], [52800.0, 1.0], [55100.0, 2.0], [56000.0, 1.0], [56100.0, 1.0], [58400.0, 1.0], [59100.0, 2.0], [59500.0, 1.0], [59700.0, 1.0], [59800.0, 1.0], [60900.0, 2.0], [61400.0, 1.0], [61500.0, 1.0], [62500.0, 1.0], [62600.0, 2.0], [62700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 62700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.525000000000002, "minX": 1.66836036E12, "maxY": 70.51666666666664, "series": [{"data": [[1.66836042E12, 20.525000000000002], [1.66836036E12, 70.51666666666664]], "isOverall": false, "label": "client-to-application", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66836042E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5690.0, "minX": 1.0, "maxY": 62706.0, "series": [{"data": [[2.0, 62676.0], [3.0, 62650.0], [4.0, 62512.0], [5.0, 61595.0], [6.0, 61485.0], [7.0, 60922.0], [8.0, 60909.0], [9.0, 59866.0], [10.0, 59713.0], [11.0, 59527.0], [12.0, 59163.0], [13.0, 59138.0], [14.0, 58451.0], [15.0, 56195.0], [16.0, 56005.0], [18.0, 55170.0], [19.0, 52774.0], [20.0, 52814.0], [21.0, 52790.0], [22.0, 52645.0], [23.0, 52547.0], [24.0, 51033.0], [25.0, 49859.0], [26.0, 49847.0], [27.0, 49450.0], [28.0, 48628.0], [29.0, 46570.0], [30.0, 46599.0], [31.0, 46276.0], [33.0, 46173.0], [32.0, 46250.0], [35.0, 44870.0], [34.0, 45890.0], [37.0, 43862.0], [36.0, 44823.0], [39.0, 40884.0], [38.0, 42254.0], [41.0, 39267.0], [40.0, 40253.0], [43.0, 39051.0], [42.0, 39181.0], [45.0, 38855.0], [44.0, 39085.0], [47.0, 37414.0], [46.0, 38466.0], [49.0, 34567.0], [48.0, 36636.0], [51.0, 33266.0], [50.0, 34088.0], [53.0, 32788.0], [52.0, 33029.0], [55.0, 32317.0], [54.0, 32373.0], [57.0, 31145.0], [56.0, 32062.0], [59.0, 29217.0], [58.0, 30418.0], [61.0, 26771.0], [60.0, 28732.0], [63.0, 26597.0], [62.0, 26599.0], [66.0, 25166.0], [65.0, 26348.0], [64.0, 26578.0], [71.0, 20635.0], [70.0, 22271.0], [69.0, 23677.0], [68.0, 24794.5], [75.0, 19002.0], [74.0, 20304.0], [73.0, 20387.0], [72.0, 20558.0], [79.0, 17538.0], [78.0, 17842.0], [77.0, 18575.0], [76.0, 18987.0], [83.0, 13727.0], [82.0, 13747.0], [81.0, 13822.0], [80.0, 16169.0], [87.0, 12999.0], [86.0, 13219.0], [85.0, 13277.0], [84.0, 13669.0], [91.0, 7423.0], [90.0, 10607.0], [89.0, 12367.0], [88.0, 12936.0], [95.0, 6698.0], [94.0, 6702.0], [93.0, 7154.0], [92.0, 7341.0], [99.0, 6012.0], [98.0, 6435.0], [97.0, 6631.0], [96.0, 6678.0], [100.0, 5690.0], [1.0, 62706.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.519999999999975, 34536.28]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 85.33333333333333, "minX": 1.66836036E12, "maxY": 1.1329471E7, "series": [{"data": [[1.66836042E12, 7552980.666666667], [1.66836036E12, 1.1329471E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66836042E12, 85.33333333333333], [1.66836036E12, 128.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66836042E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 22211.4, "minX": 1.66836036E12, "maxY": 53023.600000000006, "series": [{"data": [[1.66836042E12, 53023.600000000006], [1.66836036E12, 22211.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66836042E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 19763.466666666667, "minX": 1.66836036E12, "maxY": 50650.42500000001, "series": [{"data": [[1.66836042E12, 50650.42500000001], [1.66836036E12, 19763.466666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66836042E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 15.725000000000003, "minX": 1.66836036E12, "maxY": 23.150000000000002, "series": [{"data": [[1.66836042E12, 15.725000000000003], [1.66836036E12, 23.150000000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66836042E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5690.0, "minX": 1.66836036E12, "maxY": 62706.0, "series": [{"data": [[1.66836042E12, 62706.0], [1.66836036E12, 39267.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66836042E12, 62420.299999999996], [1.66836036E12, 38360.799999999996]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66836042E12, 62706.0], [1.66836036E12, 39267.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66836042E12, 62674.7], [1.66836036E12, 39083.3]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66836042E12, 40253.0], [1.66836036E12, 5690.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66836042E12, 52782.0], [1.66836036E12, 21453.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66836042E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13473.0, "minX": 1.0, "maxY": 52774.0, "series": [{"data": [[1.0, 29217.0], [8.0, 13473.0], [2.0, 36516.5], [4.0, 39133.0], [5.0, 52774.0], [6.0, 26296.0], [3.0, 28436.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11308.5, "minX": 1.0, "maxY": 49286.0, "series": [{"data": [[1.0, 26750.0], [8.0, 11308.5], [2.0, 33357.0], [4.0, 36678.5], [5.0, 49286.0], [6.0, 24214.0], [3.0, 26070.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66836036E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66836036E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66836036E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66836036E12, "maxY": 1.0, "series": [{"data": [[1.66836042E12, 0.6666666666666666], [1.66836036E12, 1.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66836042E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66836036E12, "maxY": 1.0, "series": [{"data": [[1.66836042E12, 0.6666666666666666], [1.66836036E12, 1.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66836042E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66836036E12, "maxY": 1.0, "series": [{"data": [[1.66836042E12, 0.6666666666666666], [1.66836036E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66836042E12, "title": "Total Transactions Per Second"}},
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

