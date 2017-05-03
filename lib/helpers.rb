module Helpers

  def active(name, class_name = 'active', reverse = false)
    if(class_active = current_page.data.active)
      class_active.split(/[\s,']/)
      if(reverse)
        class_name if(!class_active.include?(name))
      else
        class_name if(class_active.include?(name))
      end
    end
  end

  def version(name, return_value = true, else_value = false )
    names = Array(name)
    @c = current_page
    @versions = "#{@c.data.version} #{@c.metadata[:locals][:versions]}"
    if(names.any? { |n| @versions.split(/[\s,']/).include?(n) })
      return_value
    else
      else_value if(else_value)
    end
  end

  def full_url(path)
    "#{config[:host]}#{path}"
  end

  def svg(name)
    content_tag(:svg, class: "shape #{name}") do
      content_tag(:use, nil, :'xlink:href' => "#shape-#{name}")
    end
  end

end
