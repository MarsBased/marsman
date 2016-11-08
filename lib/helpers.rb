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

  def version(name, return_value = true )
    @c = current_page
    @versions = "#{@c.data.version} #{@c.metadata[:locals][:version]}"
    return_value if(@versions.split(/[\s,']/).include?(name))
  end

  def full_url(path)
    "#{config[:host]}#{path}"
  end

end
