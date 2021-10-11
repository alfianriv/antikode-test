SELECT
       tb.name,
       t.name as outlet_name,
       t.address,
       t.longitude,
       t.latitude,
       COUNT(tp.id) as total_product,
       (
        6371 * acos (
            cos ( radians(-6.175392) )
            * cos( radians( t.latitude ) )
            * cos( radians( t.longitude ) - radians(106.827153) )
            + sin ( radians(-6.175392) )
            * sin( radians( t.latitude ) )
            )
        ) AS distance
        -- in kilometer
FROM tb_brand tb
    LEFT JOIN tb_outlet t on tb.id = t.brand_id
    LEFT JOIN tb_product tp on t.id = tp.outlet_id
GROUP BY tb.name, t.name, t.address, t.longitude, t.latitude